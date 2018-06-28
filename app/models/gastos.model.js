var DB = require("app/models/db");

var gastos = {};

gastos.obtenerGastos = (callback) =>
{
    var q   = "SELECT * FROM gastos";
  
	DB.getConnection(function(err, connection)
	{
		connection.query( q , function(err, rows){
		
			if(err)	throw err;

			else{
				callback(null, rows); 
			}

            connection.release()
            
		});
	});
};

gastos.obtenerGasto = (data, callback) =>
{
    var q   = "SELECT * FROM gastos WHERE id = ?";
    
    var par = data;
  
	DB.getConnection(function(err, connection)
	{
		connection.query( q , par, function(err, rows){
		
			if(err)	throw err;

			else{
				callback(null, rows); 
			}

			connection.release();
		});
	});
};

gastos.modificarGasto = (data, callback) => 
{
	var q   = "";
	var par = data;
	
	DB.getConnection(function(err, connection)
	{
		connection.query( q , par , function(err, result){

			if(err)	throw err;

			else callback(null,{"insertId" : result.insertId}); 
				
			connection.release();
		});
	});
};

gastos.nuevoGasto = (data, callback) => 
{
	var q   = "";
	var par = data;
	
	DB.getConnection(function(err, connection)
	{
		connection.query( q , par , function(err, result){

			if(err)	throw err;

			else callback(null,{"insertId" : result.insertId}); 
				
			connection.release();
		});
	});
};

gastos.eliminarGasto = (data, callback) => 
{
    var q = "";

    var par = data;
    
	DB.getConnection(function(err, connection)
	{
		connection.query( q, par, function(err, row)
		{
			if(err)	throw err;

			else callback(null,{"affectedRows" : row.affectedRows }); 
				
			connection.release();
		});
	});
};

module.exports = gastos;