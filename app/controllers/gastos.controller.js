var gastos  = require("app/models/gastos.model");

exports.obtenerGastos =  function(req, res) {

	gastos.obtenerGastos(function(error, data)
	{
		res.status(200).json({
			"data": data
		});
	});

};

exports.obtenerGasto =  function(req, res) {
	
	var id = req.params.id;
	gastos.obtenerGasto(id,function(error, data)
	{
		res.status(200).json({
			"data": data
		});
	});

};

exports.nuevoGasto =  function(req, res) {
	
	var data = {
		name: req.body.name,
		date: req.body.date,
		monto: req.body.monto,
		id: req.body.id
	}

	gastos.nuevoGasto(data,function(error, data)
	{
		res.status(200).json({
			"data": data
		});
	});

};

exports.modificarGasto =  function(req, res) {
	
	var data = {
		name: req.body.name,
		date: req.body.date,
		monto: req.body.monto,
		id: req.body.id
	}

	gastos.modificarGasto(data, function (error, data)
	{
		res.status(200).json({
			"data": data
		});
	});

};

exports.eliminarGasto =  function(req, res) {
	
	var id = req.params.id;

	gastos.eliminarGasto(id,function(error, data)
	{
		res.status(200).json({"data":data});
	});

};