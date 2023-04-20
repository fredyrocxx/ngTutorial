"use strict";

const express = require('express');

const app = express();

const data = require('./db.json');

const port = 3001;

app.use(express.json({limit: '2mb'}));



app.get('/get-data', (req, res)=>{
    res.json(data);
});


//app.post('/', (req, res)=>{

//});



app.listen(port, () => console.log(`Actions server listening on port ${port}`));
