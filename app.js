"use strict";

var express        = require('express');
var path    	   = require("path");
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var _              = require('underscore');

var app            = express();
var http           = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);

// Muestra un log de todos los request en la consola 
app.use(logger('dev'));
// Permite cambiar el HTML con el método POST    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Simula DELETE y PUT  
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

/*pp.get('/', function(req, res){
	res.sendfile(path.join(__dirname+'/public/index.html'));
});*/

app.get('/test', function (req, res) {

  res.status(200).json({
    "notes": [
      {"id": 100, "content": "content1"},
      {"id": 101, "content": "content2"},
      {"id": 102, "content": "content3"}
    ]
  });
  //res.sendFile(path.join(__dirname+'/public/index.html'));

});

http.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});