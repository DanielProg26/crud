var gastos  = require("app/models/gastos.model");

exports.obtenerGastos =  function(req, res) {

	gastos.obtenerGastos(function(error, data)
	{
		res.status(200).json(data);
	});

};

exports.obtenerGasto =  function(req, res) {
	
	var id = req.params.id;
	gastos.obtenerGasto(id,function(error, data)
	{
		res.status(200).json(data);
	});

};

exports.nuevoGasto =  function(req, res) {
	
	var data = {
		clave: req.body
	}

	gastos.nuevoGasto(data,function(error, data)
	{
		res.status(200).json(data);
	});

};

exports.modificarGasto =  function(req, res) {
	
	var data = {
		clave: req.body
	}

	gastos.modificarGasto(id,function(error, data)
	{
		res.status(200).json(data);
	});

};

exports.eliminarGasto =  function(req, res) {
	
	var id = req.params.id;

	gastos.eliminarGasto(id,function(error, data)
	{
		res.status(200).json(data);
	});

};