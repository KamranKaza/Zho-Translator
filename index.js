var http = require('http');

//var server = http.createServer(function(request, response) {
//    response.sendfile('translator.html');
//});
// var port = process.env.PORT || 1337;
//server.listen(port);

const express = require('express');
const app = new express();
app.get("/",function(request,response){
    response.sendFile('translator.html');
})
console.log("Server running at http://localhost:%d", port);