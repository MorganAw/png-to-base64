var path    = require('path');
var express = require('express');

var server = new express();

var staticDir = path.join(__dirname, 'static');
server.use(express.static(staticDir));

server.get('/', function(req, res) {
  res.status(200).sendFile(path.join(staticDir, 'templates', 'index.html'));
});

var port = process.env.PORT || 8080;
var serverInstance = server.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    var mode = server.settings.env;
	console.log('App listening on port %s in %s mode', port, mode);
  }
});
