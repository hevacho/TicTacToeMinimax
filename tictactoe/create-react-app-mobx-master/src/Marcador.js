import React, { Component } from 'react';
import DatosTicTacToe from './DatosTicTacToe';
import { observer } from 'mobx-react';


class Marcador extends Component {


    render(){

        let simbolo = DatosTicTacToe.obtenerGanador();
        let sinCasillasLibres = DatosTicTacToe.sinCasillasLibres();
        let ultimoSimbolo = DatosTicTacToe.getUltimoValorIntroducido();

        let mensaje ='';

        //mensaje de turno del jugador
        if(ultimoSimbolo==null || ultimoSimbolo=='O'){
            mensaje = 'Turno de jugador 1';
        }else{
            mensaje = 'Turno de jugador 2';
        }

        //si existe ganador o se acaban las casillas
        if(simbolo!=null){
            if(simbolo === 'X'){
                mensaje= "Ha ganado el jugador 1";
            } else{
                mensaje ="Ha ganado la IA";
            }
        }else if(sinCasillasLibres){

            mensaje = "Se han cubierto todas las casillas";
        }

        return(
            <div>
                <label>{mensaje}</label>
            </div>

        );
    }

}

export default observer (Marcador);