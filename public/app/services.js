angular.module("sistema-de-gastos")
	.service("gastosService", ["$http", "$q", function ($http, $q) {

		this.listarGastos = function () {

			var defered = $q.defer();

			var promise = defered.promise;

			$http.get("/conta/gastos").then(function (res) {

				defered.resolve(res.data);

			}).catch(function () {

				defered.reject();

			});

			return promise;

		};

		this.obtenerGasto = function (id) {

			var defered = $q.defer();

			var promise = defered.promise;

			$http.get("/conta/gasto/"+ id).then(function (res) {

				defered.resolve(res.data);


			}).catch(function () {

				defered.reject();

			});

			return promise;

		};

		this.nuevoGasto = function (datos) {

			var defered = $q.defer();

			var promise = defered.promise;

			$http.post("/conta/gasto", datos).then(function (res) {

				defered.resolve(res.data);


			}).catch(function () {

				defered.reject();

			});

			return promise;

		};

		this.actualizarGasto = function (datos) {

			var defered = $q.defer();

			var promise = defered.promise;

			$http.post("/conta/gasto/modificar", datos).then(function (res) {

				defered.resolve(res.data);

			}).catch(function () {

				defered.reject();

			});

			return promise;

		};

		this.eliminarGasto = function (id) {

			var defered = $q.defer();

			var promise = defered.promise;

			$http.get("/conta/gasto/eliminar/"+ id).then(function (res) {

				defered.resolve(res.data);

			}).catch(function () {

				defered.reject();

			});

			return promise;

		};

	}]);