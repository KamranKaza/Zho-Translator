'use strict';

const express = require('express')

const app = express();
app.get('/',(req,res)=>{
    res.sendfile('index.html');
});
var port = process.env.PORT || 1337;
app.listen(port);