angular.module("sistema-de-gastos")

	.controller("inicioController", ["$state", "$rootScope", "$scope", "gastosResolve", function ($state, $rootScope, $scope, gastosResolve) {

		var bz = this;

		bz.gastos = gastosResolve;

	}]);
