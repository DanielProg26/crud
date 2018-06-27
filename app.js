require('app-module-path').addPath(__dirname + '/');
global.__basePath = require('path').resolve(__dirname);

var gastos = require('./routes/gastos.routes.js');
var express = require('express');
var app = express();

app.use('/conta', gastos);

app.listen(3000, function () {
  console.log('Servidor corriendo en Puerto:3000!');
});
