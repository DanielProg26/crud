<div class="container-fluid no-padding">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Sistema contable</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Lista de gastos
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nuevo registro</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container" ng-switch="inicio.menuActivo">
        <div class="padding">
            <h3 class="text-center">Listado de gastos</h3>
        </div>
        <div ng-switch-default>
            <div class="row padding">
                <div class="col-sm">
                    Filtrar por:
                </div>
                <div class="col-sm">
                    Fecha:
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <ul class="list-group">
                        <li class="list-group-item" ng-repeat="gasto in gastos">{{gasto.name}} {{gasto.monto}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>