angular.module("sistema-de-gastos")

	.controller("inicioController", ["$state", "$stateParams", "$rootScope", "$scope", "gastosService", "$timeout", function ($state, $stateParams, $rootScope, $scope, gastosService, $timeout) {

		var bz = this;
		gastosService.listarGastos().then(function (res) {
	
			angular.forEach(res.data, function (gasto) {
				var fecha = new Date(gasto.date);
				gasto.date = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
			})

			bz.gastos = res.data;
		})

		bz.nuevo = function (gasto) {
			gastosService.nuevoGasto(gasto).then(function (res) {
				gasto.id = res.data.insertId;
				bz.gastos.push(gasto);
				bz.mensaje('Gasto registrado!', 1);
			})
		}

		bz.actualizar = function (gasto) {
			gastosService.actualizarGasto(gasto).then(function (res) {
				gasto.editando = false;
				bz.mensaje('Registro modificado!', 2);
			})
		}

		bz.eliminar = function (id, index) {
			gastosService.eliminarGasto(id).then(function (res) {
				bz.datos.splice(1, index);
				bz.mensaje('Registro eliminado!', 3);
			})
		}

		bz.mensaje = function (mensaje, id) {
			bz.mensajeFormulario = {
				msg: mensaje,
				id: id
			};
			$timeout(() => {
				bz.mensajeFormulario = false;
			}, 4000);
		}

	}]);