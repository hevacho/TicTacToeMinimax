import React, { Component } from 'react';
import DatosTicTacToe from './DatosTicTacToe';
import { observer } from 'mobx-react';


class Casilla extends Component {

    constructor(props){
        super(props);
    }

    hacerClick(posicion){

        let simboloOld = DatosTicTacToe.obtenerValor(posicion);
        let ultimoSimbolo = DatosTicTacToe.getUltimoValorIntroducido();
        let simboloGanador = DatosTicTacToe.obtenerGanador();

        if(simboloOld==null && simboloGanador==null){

            if(ultimoSimbolo=='X'){
                DatosTicTacToe.modificarValor(posicion, 'O')
            }else{
                DatosTicTacToe.modificarValor(posicion, 'X')
            }

            //logica para jugador2MiniMAX
            DatosTicTacToe.lanzarJugador2();
        }


        console.log(posicion);
    }




    render(){

        let simbolo = DatosTicTacToe.obtenerValor(this.props.posicion);
        let etiqueta = '--';
        let estilo = '';

        if(simbolo!=null){
            etiqueta=simbolo;
            if(simbolo==='X'){
                estilo = 'rojo';
            }else{
                estilo = 'azul';
            }
        }

        return(

                <label className={estilo} onClick={this.hacerClick.bind(this, this.props.posicion)}>{etiqueta}</label>

        );
    }

}

export default observer (Casilla);