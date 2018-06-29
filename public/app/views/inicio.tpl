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
                    <a class="nav-link" ng-click="inicio.nuevoRegistro = !inicio.nuevoRegistro">Nuevo registro</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">

        <div class="row">
            <div class="col-sm">
                <div class="padding">
                    <h3 class="text-center">Listado de gastos</h3>
                    <p class="text-center">Ultimos gastos registrados.</p>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="table-responsive-lg">
                            <table class="table">
                                <thead>
                                    <th scope="col" colspan="2">Nombre</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col" colspan="2">Acciones</th>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="gasto in inicio.gastos">
                                        <td scope="row" colspan="2">
                                            <input class="form-control" type="text" ng-model="gasto.name" ng-readonly="!gasto.editando">
                                        </td>
                                        <td>
                                            <input class="form-control" type="date" ng-model="gasto.date" ng-readonly="!gasto.editando">
                                        </td>
                                        <td>
                                            <input class="form-control" type="number" ng-model="gasto.monto" ng-readonly="!gasto.editando">
                                        </td>
                                        <td>
                                            <button ng-show="gasto.editando" type="button" class="btn btn-success" ng-click="inicio.actualizar(gasto)">Guardar</button>
                                            <button ng-show="!gasto.editando" type="button" class="btn btn-info" ng-click="gasto.editando = !gasto.editando">Editar</button>

                                            <button type="button" class="btn btn-danger" ng-click="inicio.eliminar(gasto.id, $index)">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="text-center" ng-show="inicio.mensajeFormulario.id == 2">{{inicio.mensajeFormulario.msg}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center" padding>
            <div ng-show="inicio.nuevoRegistro" class="col-sm">
                <h3 class="text-center padding">Nuevo registro</h3>
                <form class="form" name="inicio.registroForm" novalidate ng-submit="inicio.nuevo(inicio.datosForm, inicio.registroForm.$valid)">
                    <div class="row">
                        <div class="col">
                            <input class="form-control" id="name" name="name" type="text" ng-model="inicio.datosForm.name" required placeholder="Nombre">
                            <div ng-messages="inicio.datosForm.name.$error" ng-if="inicio.datosForm.$submitted || inicio.datosForm.name.$dirty">
                                <div ng-message="required">Este campo es requerido.</div>
                            </div>
                        </div>
                        <div class="col">
                            <input class="form-control" id="date" name="date" type="date" ng-model="inicio.datosForm.date" required placeholder="fecha">
                            <div ng-messages="inicio.datosForm.date.$error" ng-if="inicio.datosForm.$submitted || inicio.datosForm.date.$dirty">
                                <div ng-message="required">Este campo es requerido.</div>
                            </div>
                        </div>
                        <div class="col">
                            <input class="form-control" id="monto" name="monto" type="text" ng-model="inicio.datosForm.monto" required placeholder="monto">
                            <div ng-messages="inicio.datosForm.monto.$error" ng-if="inicio.datosForm.$submitted || inicio.datosForm.monto.$dirty">
                                <div ng-message="required">Este campo es requerido.</div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary mb-2">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>