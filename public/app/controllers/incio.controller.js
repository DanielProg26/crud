angular.module("sistema-de-gastos")

	.controller("inicioController", ["$state", "$stateParams", "$rootScope", "$scope", "gastosService", "$timeout", function ($state, $stateParams, $rootScope, $scope, gastosService, $timeout) {

		var bz = this;
		bz.gastos = [];
		bz.total = 0;

		gastosService.listarGastos().then(function (res) {
	
			angular.forEach(res.data, function (gasto) {
				bz.total += parseInt(gasto.monto);
				gasto.date = new Date(gasto.date);
			})

			bz.gastos = res.data;

			if(bz.gastos.length == 0){
				bz.nuevoRegistro = true;
			}
		})

		bz.nuevo = function (gasto) {
			gastosService.nuevoGasto(gasto).then(function (res) {
				gasto.id = res.data.insertId;
				gasto.monto = parseInt(gasto.monto);
				bz.gastos.push(angular.copy(gasto));
				bz.datosForm = {};
				bz.mensaje('Gasto registrado!', 1);
			})
		}

		bz.actualizar = function (gasto) {
			gastosService.actualizarGasto(gasto).then(function (res) {
				bz.total = 0;
				angular.forEach(bz.gastos, function (gasto) {
					bz.total += parseInt(gasto.monto);
				})
				gasto.editando = false;
				bz.mensaje('Registro modificado!', 2);
			})
		}

		bz.eliminar = function (gasto, index, arr) {
			
			gastosService.eliminarGasto(gasto.id).then(function (res) {
				bz.total -= gasto.monto;
				arr.splice(index, 1);
				if(arr.length == 0) return bz.nuevoRegistro = true;
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