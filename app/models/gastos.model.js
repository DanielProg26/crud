var DB = require("app/models/db");

var gastos = {};

gastos.obtenerGastos = (callback) => {
	var q = "SELECT *, DATE_FORMAT(date,\'%d/%m/%Y\') as dateFormat FROM gastos";

	DB.getConnection(function (err, connection) {
		connection.query(q, function (err, rows) {

			if (err) throw err;

			else {
				callback(null, rows);
			}

			connection.release()

		});
	});
};

gastos.obtenerGasto = (data, callback) => {
	var q = "SELECT * FROM gastos WHERE id = ?";

	var par = data;

	DB.getConnection(function (err, connection) {
		connection.query(q, [par], function (err, rows) {

			if (err) throw err;

			else {
				callback(null, rows);
			}

			connection.release();
		});
	});
};

gastos.modificarGasto = (data, callback) => {

	var q = 'UPDATE gastos SET name = ?, date = ?, monto = ? WHERE id = ?';
	var par = [data.name, data.date.replace('T03:00:00.000Z', ''), data.monto, data.id];

	DB.getConnection(function (err, connection) {
		connection.query(q, par, function (err, row) {

			if (err) throw err;

			else callback(null, {
				"affectedRows": row.affectedRows
			});

			connection.release();
		});
	});
};

gastos.nuevoGasto = (data, callback) => {
	var q = "INSERT INTO gastos SET ?";
	var par = data;

	DB.getConnection(function (err, connection) {
		connection.query(q, par, function (err, result) {

			if (err) throw err;

			else callback(null, {
				"insertId": result.insertId
			});

			connection.release();
		});
	});
};

gastos.eliminarGasto = (data, callback) => {
	var q = "DELETE FROM gastos WHERE id = ?";

	var par = [parseInt(data)];

	DB.getConnection(function (err, connection) {
		connection.query(q, par, function (err, row) {
			if (err) throw err;

			else callback(null, {
				"affectedRows": row.affectedRows
			});

			connection.release();
		});
	});
};

module.exports = gastos;