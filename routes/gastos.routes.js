var express = require('express');
var controllers = require("app/controllers");
var router = express.Router();
var compression = require('compression');

router.use(compression());

router.get('/gastos', controllers.gastos.obtenerGastos);

router.get('/gasto/:id', controllers.gastos.obtenerGasto);

router.post('/gasto', controllers.gastos.nuevoGasto);

router.put('/gasto', controllers.gastos.modificarGasto);

router.delete('/gasto/:id', fcontrollers.gastos.eliminarGasto);

module.exports = router;