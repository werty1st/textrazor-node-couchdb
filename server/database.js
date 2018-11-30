const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const DB = process.env.DB || "";

const jobs = new PouchDB(`${DB}jobs`);


PouchDB.plugin({

    getAllDone: function(){
        return this.find({
            selector: { status: {"$eq": "done"} }
        });
    },

    getOpenJob: function(jobId/**optional filter by id */){
        if (jobId){
            return this.find({
                selector: { 
                    status: {"$eq": "open"},
                    _id : {"$eq": jobId}
                }
            });
        } else {
            return this.find({
                selector: { status: {"$eq": "open"} },
                limit: 1
            });
        }
    }
   
    
}); 

module.exports = { jobs };