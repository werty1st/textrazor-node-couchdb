const app = require('express')();
const bodyParser = require('body-parser');
const server = require('http').Server(app);


const {feeder }= require("./feeder");
const {jobs} = require("./database");

const APIPORT =  process.env.APIPORT || 3000;

/**
 * Express
 */
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/result/:Id', function (req, res) {
  console.log("ID", req.params.Id);
  jobs.get(req.params.Id)
  .then(doc=>res.end(JSON.stringify(doc)))
  .catch(err=>res.end(JSON.stringify(err)));
})

app.get('/gettopic/:Id', function (req, res) {
  console.log("ID", req.params.Id);
  jobs.getTopic(req.params.Id)
  .then(doc=>res.end(JSON.stringify(doc)))
  .catch(err=>res.end(JSON.stringify(err)));
})


app.post('/recognize', function (req, res) {
  let meldung = req.body;
  feeder.createJob(meldung).then( response=>{
    res.end(JSON.stringify(response));
  }); 
  //feeder.createJob(assetId,url,operation).then(val=>res.end(val));    
})



server.listen(APIPORT)
let host = server.address().address
let port = server.address().port
console.log("Server listening at http://%s:%s", host, port)