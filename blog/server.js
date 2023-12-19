var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 5000;

server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));

server.listen(port);
console.log("Blog is up on port " + port);

//application
server.get('*', function(req, res) {
  res.sendFile('index.html', { root: './project' });
});
