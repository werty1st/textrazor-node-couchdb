const fs = require ("fs");
const rp = require('request-promise-native');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./lpd_atom.jl'),
  crlfDelay: Infinity
});

const TARGET = process.env.TARGET || "http://127.0.0.1:3000"

const meldungen = [];

rl.on('line', (line)=>{
    meldungen.push(line);
});

rl.on('close', ()=>{
    publishMeldungen();
    setInterval( publishMeldungen, 5000 );
});

function publishMeldungen(){

    let rand = Math.floor(Math.random()*meldungen.length);
    let meldung = JSON.parse (meldungen[rand]);
    console.log( meldung.source_id, meldung.title );

    rp.post({
        uri: `${TARGET}/recognize`,
        body: meldung,
        json: true
    })
    .then( (response)=>{
        console.log ( response );
    })
    .catch( (err)=>{
        console.log ( err.message );
    })
}


/**
 * 
 * 
   curl -X POST \
    -H "x-textrazor-key: YOUR_API_KEY" \
    -d "extractors=entities,entailments" \
    -d "text=Spain's stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways and Iberia." \
    https://api.textrazor.com/
 */


