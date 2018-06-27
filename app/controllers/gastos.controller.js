var usuario  = require("app/modelos/gastos.modelo.js");

exports.borrarUsuario =  function(req, res) {
	
	var id = req.params.id;
	usuario.deleteUsuario(id,function(error, data)
	{
		res.status(200).json(data);
	});

};