<div class="container-fluid no-padding">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Sistema de gastos</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active" style="cursor: pointer;">
                    <a class="nav-link" href="#">Lista de gastos
                    </a>
                </li>
                <li class="nav-item" style="cursor: pointer;">
                    <a class="nav-link active" ng-click="inicio.nuevoRegistro = !inicio.nuevoRegistro">Nuevo registro</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">

        <div class="row" ng-show="inicio.gastos.length > 0">
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
                                            <button type="button" class="btn btn-success" ng-click="inicio.actualizar(gasto)" ng-disabled="!gasto.editando">Guardar</button>
                                            <button type="button" class="btn btn-info" ><span ng-click="gasto.editando = true" ng-show="!gasto.editando" >Editar</span><span ng-click="gasto.editando = false" ng-show="gasto.editando" >Cancelar</span></button>

                                            <button type="button" class="btn btn-danger" ng-click="inicio.eliminar(gasto, $index, inicio.gastos)">Eliminar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"><h4>Total: </h4></td>
                                        <td><h4>{{inicio.total}}</h4></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
<div class="contenedor-mensajes">
    <div class="text-center" ng-show="inicio.mensajeFormulario.id == 1"><p>{{inicio.mensajeFormulario.msg}}</p></div>
    <div class="text-center" ng-show="inicio.mensajeFormulario.id == 2"><p>{{inicio.mensajeFormulario.msg}}</p></div>
    <div class="text-center" ng-show="inicio.mensajeFormulario.id == 3"><p>{{inicio.mensajeFormulario.msg}}</p></div>
</div>