var express = require('express');
var fs = require('fs');
var app = express();

// Init checks
init();

// Require galleries config file
var galleries = require('galleries.json');

app.get('/', function(req, res) {
    console.info('Requesting index page');
    res.setHeader('Content-Type', 'text/plain');

    // If we don't have any galleries, return early
    if(!galleries.galleries.length){
        res.end('No gallery found');
    }

    console.info( galleries.galleries.length + " galleries found" );
    res.end(JSON.stringify(galleries));
});
app.listen(8080);



function init(){
    console.info('Init function...');
    if (!fs.existsSync('galleries.json')) {
        throw new Error('Galleries config file missing');
    }
}