import React, { Component } from 'react';
import Tablero from './Tablero';
import Marcador from './Marcador';


class Juego extends Component {


    render(){

        return(
            <div className="container">
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-md-2">

                        <Tablero/>

                    </div>

                    <div className="col-md-3">
                        <Marcador/>
                    </div>


                </div>
            </div>


        )
    }

}

export default Juego;