import React from 'react'

const Form = props => (

    <div className="container mt-4 p-4">

        <form onSubmit={props.getform}>
            <div className="row text-left p-4">
                <div className="col-md-6 ">

                    <h3 className="mb-4">Gastos de Combustible</h3>

                    <i class="fas fa-route"> Introduzca la distancia del viaje</i>
                    <div className="form-group col-md-6 mt-4">
                        <label for="inputEmail4">KM de Ida</label>
                        <input type="text" name="kmida" className="form-control" defaultValue="0" placeholder="KM" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">KM de Vuelta</label>
                        <input type="text" name="kmvuelta" className="form-control" defaultValue="0" placeholder="KM" />
                    </div>

                    <hr />
                    <i class="fas fa-car"> Introduzca el consumo medio del vehiculo</i>
                    <div className="form-group col-md-6 mt-4">
                        <label for="inputEmail4">KM</label>
                        <input type="text" name="kmmedia" className="form-control" defaultValue="0" placeholder="KM" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Lts</label>
                        <input type="text" name="litrosmedia" className="form-control" defaultValue="0" placeholder="Litros" />
                    </div>

                    <hr />
                    <i class="fas fa-gas-pump">  Introduzca el Precio del Combustible</i>
                    <div className="form-group col-md-6 mt-4">
                        <input type="text" name="preciolitro" className="form-control" defaultValue="0" placeholder="$$$" />
                    </div>
                </div>

                <div className="col-md-6 ">
                    <div className="form-group ">
                        <h3 className="mb-4">Gastos Adicionales</h3>

                        <i class="fas fa-hand-holding-usd"> Viaticos</i>
                        <div className="form-group col-md-6 mt-4">
                            <input type="text" name="viaticos" className="form-control" defaultValue="0" placeholder="$$$" />
                        </div>

                        <i class="fas fa-hotel">  Hospedajes</i>
                        <div className="form-group col-md-6 mt-4">
                            <input type="text" name="hospedaje" className="form-control" defaultValue="0" placeholder="$$$" />
                        </div>

                        <i class="fas fa-ticket-alt">  Peajes</i>
                        <div className="form-group col-md-6 mt-4">
                            <input type="text" name="peaje" className="form-control" defaultValue="0" placeholder="$$$" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Calcular</button>
            </div>
        </form>









    </div>

)

export default Form;