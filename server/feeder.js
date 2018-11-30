const EventEmitter = require('events');
const xx = require("xxhashjs");
const _rp = require('request-promise-native');
const {jobs} = require("./database");

const RAZORKEY = process.env.RAZORKEY;

/**ENUM status */
class Status{
  static get open(){return "open"}
  static get working(){return "working"}
  static get done(){return "done"}
  static get failed(){return "failed"}
}

const H = xx.h64( 0xABCD );	// seed = 0xABCD
const rrp = _rp.defaults({
    headers: {
        "x-textrazor-key": RAZORKEY
    }
});


class Replace{
  static fixCountry ( county ){
    switch(county){
        case "bgld":
            return "Burgenland";
            break;
        case "Vorarlberg":
            return "";
            break;
        case "sbg":
            return "Salzburg";
            break;
        case "noe":
            return "Niederösterreich";
            break;
        case "ooe":
            return "Oberösterreich";
            break;
        case "tirol":
            return "Tirol";
            break;
        case "ktn":
            return "Kärnten";
            break;
        case "stmk":
            return "Steiermark";
            break;
        case "wien":
            return "Wien";
            break;
        default:
            return county;
    }
}
}

class Job {

    constructor(meldung){

        if (typeof meldung != "object"){
            throw ("Constructor must be a JSON Object")
        }
        this._id = H.update( JSON.stringify(meldung) ).digest().toString(16);
        this.status = Status.open;
        this.result = undefined;
        this.payload = meldung;
        this.createdAt = Date.now();

        //fix State
        meldung.country = Replace.fixCountry(meldung.country);

    }
}

class Feeder extends EventEmitter{

    constructor (){
        super();

        /**Autostart off due to exporting an Instance*/
        this.startPublishJobs();    
    }


    startPublishJobs (){
        this.timerJobPublish = setInterval(this._publishJobs.bind(this),5000);
        console.info(`JobPublish startet`);
    }

    stopPublishJobs (){
        clearInterval(this.timerJobPublish);
        console.info(`JobPublish stopped`);
    }


    async createJob (meldung){

        let job = new Job(meldung);
        //console.log( meldung.source_id );

        let isNewJob = await jobs.get(job._id).then(()=>false).catch((err)=>(err.status == 404 ));
        if (!isNewJob) return Promise.resolve( { "message": "duplicate job", "id": job._id, "sourceId": meldung.source_id} ); //FIXME return scanning result

        //save new job
        return jobs.put(job).then( (result)=>{
            console.log( "saved job", meldung.source_id );
            return { "message": "saved job", "id": job._id, "sourceId": meldung.source_id};
        }).catch( (err)=>{
            console.error( "error saving job" );
            return  "error saving job";
        });
    }  

    async _publishJobs(){
        //console.log("pup")

        let openjobs = await jobs.getOpenJob();
        //sent data to razer
        openjobs.docs.map( async doc => {
            doc.status = Status.working;
            let response = await jobs.put(doc);
            if (response.ok){
                //sent to razor
                console.log("sending >>",doc.payload.title,"<<to razor");
                doc._rev = response.rev;
                this._textrazor(doc);
            }
        })
    }

    _restartDoc(doc){
        // if failcount<5 open job again
        // ++failcount
        if (doc.failcount){
            if (doc.failcount >= 3){
                //failed
                doc.status = Status.failed;
                delete doc.failcount; //easier to restart
            } else {
                doc.failcount += 1;
                doc.status = Status.open;
            }
        } else {
            doc.failcount = 1;
            doc.status = Status.open;            
        }
        
        jobs.put(doc).catch(err=>{
            console.error("DB update error",err);
        });
    }

    _saveResult(doc, result){
        doc.status = Status.done;
        doc.result = result;
        jobs.put(doc)
        .then(()=>{
            console.info("saved result:",doc.payload.source_id, doc._id);
        })
        .catch(err=>{
            console.error("DB update error",err);
        });
    }


    async _textrazor(doc){

        let options = {
            url:'https://api.textrazor.com',
            form: {
                extractors: "topics",
                text: doc.payload.text
            },
            json: true
        };

        rrp.post(options)
        .then(result=>{
            this._saveResult(doc,result);
        })
        .catch(err=>{
            this._restartDoc(doc);
            console.error("razor error", err.message );
        });

    }
  
}

const feeder = new Feeder();
module.exports = { feeder, Status };
