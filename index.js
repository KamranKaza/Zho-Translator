var http = require('http');

var server = http.createServer(function(request, response) {

    fs.readFile("translator.html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });

});
var port = process.env.PORT || 1337;
server.listen(port);