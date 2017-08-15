import React, { Component } from 'react';
import Casilla from './Casilla';



class Tablero extends Component {

    render(){

        return(

            <div>
                <div className="square">
                    <Casilla posicion='0'/>
                </div>
                <div className="square">
                    <Casilla posicion='1'/>
                </div>
                <div className="square">
                    <Casilla posicion='2'/>
                </div>

                <div className="afterSquare" />

                <div className="square">
                    <Casilla posicion='3'/>
                </div>
                <div className="square">
                    <Casilla posicion='4'/>
                </div>
                <div className="square">
                    <Casilla posicion='5'/>
                </div>

                <div className="afterSquare" />

                <div className="square">
                    <Casilla posicion='6'/>
                </div>

                <div className="square">
                    <Casilla posicion='7'/>
                </div>

                <div className="square">
                    <Casilla posicion='8'/>
                </div>
            </div>


        )
    }

}

export default Tablero;