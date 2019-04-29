import React, { Component } from 'react';

import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Grid from './Grid';


export default class App extends Component {

  state = {

    gastocombustible: '',
    peaje: '',
    hospedaje: '',
    viaticos: '',
    gastototal: ''

  }

  getform = e => {

    e.preventDefault();

    const { kmida, kmvuelta, kmmedia, litrosmedia, preciolitro, hospedaje, viaticos, peaje } = e.target.elements;

    const kmidavalue = parseInt(kmida.value);
    const kmvueltavalue = parseInt(kmvuelta.value);
    const kmmediavalue = parseInt(kmmedia.value);
    const litrosmediavalue = parseInt(litrosmedia.value);
    const preciolitrovalue = parseInt(preciolitro.value);
    const peajesvalue = parseInt(peaje.value);
    const hospedajesvalue = parseInt(hospedaje.value);
    const viaticosvalue = parseInt(viaticos.value);



    const kmTotal = kmidavalue + kmvueltavalue;
    const consumototal = kmTotal * litrosmediavalue / kmmediavalue;
    const preciototalcombustible = consumototal * preciolitrovalue;

    const gastostotal = preciototalcombustible + viaticosvalue + peajesvalue + hospedajesvalue;



    this.setState({

      gastocombustible: preciototalcombustible,
      peaje: peajesvalue,
      hospedaje: hospedajesvalue,
      viaticos: viaticosvalue,
      gastototal: gastostotal

    })

  }

  render() {
    return (
      <div className="App">
        <Header />

        <Form getform={this.getform} />

        <Grid gastos = {this.state} />
        
      </div>
    );
  }
}


