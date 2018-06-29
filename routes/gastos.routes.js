var express = require('express');
var controllers = require("app/controllers");
var router = express.Router();
var compression = require('compression');

router.use(compression());

router.get('/gastos', controllers.gastos.obtenerGastos);

router.get('/gasto/:id', controllers.gastos.obtenerGasto);

router.post('/gasto', controllers.gastos.nuevoGasto);

router.post('/gasto/modificar', controllers.gastos.modificarGasto);

router.get('/gasto/eliminar/:id', controllers.gastos.eliminarGasto);

module.exports = router;