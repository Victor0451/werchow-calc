import React, { Component } from 'react';

class Grid extends Component {

    render() {
        let gastos = this.props.gastos;
        console.log('este es el' + gastos.peaje);
        return (
            <div className="container">
                <div className="row mt-4 p-4">
                    <h3>Gastos Totales</h3>

                    <div className="table-responsive">
                        <table class="table mt-4">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Gastos de Combustible</th>
                                    <th scope="col">Peajes</th>
                                    <th scope="col">Viaticos</th>
                                    <th scope="col">Hospedajes</th>
                                    <th scope="col"><strong>Gastos Totales</strong></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{gastos.gastocombustible}</td>
                                    <td>{gastos.peaje}</td>
                                    <td>{gastos.viaticos}</td>
                                    <td>{gastos.hospedaje}</td>
                                    <td>{gastos.gastototal}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;