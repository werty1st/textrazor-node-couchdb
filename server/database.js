const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const DB = process.env.DB || "";

const jobs = new PouchDB(`${DB}jobs`);

jobs.createIndex({
    index: {fields: ['result.response.topics']}
});

PouchDB.plugin({

    getAllDone: function(){
        return this.find({
            selector: { status: {"$eq": "done"} }
        });
    },


    getTopic: async function (id){
        let results = await this.find({
            "selector": {
                _id : {"$eq": id}
            },
            "fields": [
               "result.response.topics"
            ]
         });
         let topA = [];
         results.docs.map( item=>{
             item.result.response.topics.map( topic=>{
                topA.push([topic.label, topic.score]);
            });
         });
         return topA;
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