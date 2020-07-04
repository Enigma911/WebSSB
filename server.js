
var express = require('express'),

	swig = require('swig');
var server = express();
	// Config swig
	server.engine('html', swig.renderFile);
	server.set('view engine', 'html');
	server.set('views', __dirname + '/app/views');

// Con esta línea server sabe que en public estan nuestro 
//archivos estaticos 
	server.use(express.static('./public'))

require('./app/controllers/home')(server);
server.listen(3000);
