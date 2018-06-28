angular.module("sistema-de-gastos", ["ui.router", "ngAnimate", 'ngTouch', 'ui.bootstrap'])

	.config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$stateProvider

			.state({
				name: "inicio",
				url: "/",
				templateUrl: "app/views/inicio.tpl",
				controller: "inicioController as inicio",
				resolve: {
					gastosResolve: ["$stateParams", function ($stateParams, gastosService) {
						gastosService.listarGastos().then(function(res){
							return res;
						})
					}]
				}
			})


		$urlRouterProvider.rule(function ($injector, $location) {
			var path = $location.url();

			if ("/" === path[path.length - 1] || path.indexOf("/?") > -1) {
				return;
			}

			if (path.indexOf("?") > -1) {
				return path.replace("?", "/?");
			}

			return path + "/";
		});

		$urlRouterProvider.otherwise("/404/");

	});