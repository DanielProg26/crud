require('app-module-path').addPath(__dirname + '/');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path =  require('path');
global.__basePath = path.resolve(__dirname);
const express = require('express');
const app = express();

// Controladores
const gastos = require('routes/gastos.routes.js');

/**
 * APLICACION
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/** ARCHIVOS ESTATICOS */

app.use(express.static(path.join(__dirname, 'public')));

app.use('/angular', express.static(__dirname + '/node_modules/angular'))
app.use('/angular-animate', express.static(__dirname + '/node_modules/angular-animate'))
app.use('/angular-ui-router', express.static(__dirname + '/node_modules/angular-ui-router/release'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/angular1-ui-bootstrap4', express.static(__dirname + '/node_modules/angular1-ui-bootstrap4/dist'))
app.use('/angular-touch', express.static(__dirname + '/node_modules/angular-touch'))
app.use('/angular-messages', express.static(__dirname + '/node_modules/angular-messages'))


/** VISTA ANGULAR */

app.get('/', function (req, res, next) {
  res.sendFile('/public/index.html', { root: __dirname });
});

/** RUTAS */

app.use('/conta', gastos);

/** SERVIDOR  */

app.listen(3000, function () {
  console.log('Servidor corriendo en Puerto:3000! || Modo: ' + process.env.NODE_ENV);
});

