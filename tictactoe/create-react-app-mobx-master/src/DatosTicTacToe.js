import { extendObservable, computed } from 'mobx';

class DatosTicTacToe {
    constructor(){
        extendObservable(this,
            {valoresPosicion : [null,null,null,null,null,null,null,null,null],
             ultimoValorIntroducido : null
            });
    }

    modificarValor(index, simbolo){
        this.valoresPosicion[index]=simbolo;
        this.ultimoValorIntroducido=simbolo;
    }

    obtenerValor(index){
        return this.valoresPosicion[index];
    }

    getUltimoValorIntroducido(){
        return this.ultimoValorIntroducido;
    }


    obtenerGanador(){
        if(
              (this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[1] && this.valoresPosicion[0]=== this.valoresPosicion[2])
            ||(this.valoresPosicion[3]!=null && this.valoresPosicion[3] === this.valoresPosicion[4] && this.valoresPosicion[3]=== this.valoresPosicion[5])
            ||(this.valoresPosicion[6]!=null && this.valoresPosicion[6] === this.valoresPosicion[7] && this.valoresPosicion[6]=== this.valoresPosicion[8])

            ||(this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[3] && this.valoresPosicion[0]=== this.valoresPosicion[6])
            ||(this.valoresPosicion[1]!=null && this.valoresPosicion[1] === this.valoresPosicion[4] && this.valoresPosicion[1]=== this.valoresPosicion[7])
            ||(this.valoresPosicion[2]!=null && this.valoresPosicion[2] === this.valoresPosicion[5] && this.valoresPosicion[2]=== this.valoresPosicion[8])

            ||(this.valoresPosicion[0]!=null && this.valoresPosicion[0] === this.valoresPosicion[4] && this.valoresPosicion[0]=== this.valoresPosicion[8])
            ||(this.valoresPosicion[6]!=null && this.valoresPosicion[6] === this.valoresPosicion[4] && this.valoresPosicion[6]=== this.valoresPosicion[2])

        ){
            return this.ultimoValorIntroducido;
        }

        return null;
    }

    sinCasillasLibres(){
        let existeNull = false;
        for (let valor of this.valoresPosicion){
            if(valor === null){
                existeNull = true;
            }
        }
        return !existeNull;
    }

    lanzarJugador2(){

        try {

            if (this.obtenerGanador() == null) {


                //El segundo jugador utiliza Min, por lo tanto buscamos la posicion en la que tengamos el minimo
                let resultados = [null, null, null, null, null, null, null, null, null];

                for (var i = 0; i < this.valoresPosicion.length; i++) {
                    //si encontramos posicion libre
                    if (this.valoresPosicion[i] == null) {
                        let clonArray = this.valoresPosicion.slice();
                        clonArray[i] = 'O';
                        resultados[i] = this.calculoMiniMax('O', clonArray);
                    }
                }

                //ahora buscamos la posicion del minimo y lo retornamos
                let min = 9999;
                let pos = -1;

                for (var i = 0; i < resultados.length; i++) {
                    if (resultados[i] != null && resultados[i] < min) {
                        min = resultados[i];
                        pos = i;
                    }
                }

                this.modificarValor(pos, 'O');
            }
        }catch (exception){
            console.log(exception);
        }
    }



    obtenerValorEstadoTerminal(arrayValores){

        //verificacion de estados terminales
        if((arrayValores[0]!=null && arrayValores[0] === arrayValores[1] && arrayValores[0]=== arrayValores[2])){

            if(arrayValores[0]=='X') {
                return 1;
            }else {
                return -1;
            }

        }
        if((arrayValores[3]!=null && arrayValores[3] === arrayValores[4] && arrayValores[3]=== arrayValores[5])){
            if(arrayValores[3]=='X') {
                return 1;
            }else {
                return -1;
            }
        }

        if(arrayValores[6]!=null && arrayValores[6] === arrayValores[7] && arrayValores[6]=== arrayValores[8]){
            if(arrayValores[6]=='X') {
                return 1;
            }else {
                return -1;
            }
        }

        if(arrayValores[0]!=null && arrayValores[0] === arrayValores[3] && arrayValores[0]=== arrayValores[6]) {
            if(arrayValores[0]=='X') {
                return 1;
            }else {
                return -1;
            }
        }
        if    (arrayValores[1]!=null && arrayValores[1] === arrayValores[4] && arrayValores[1]=== arrayValores[7]) {
            if(arrayValores[1]=='X') {
                return 1;
            }else {
                return -1;
            }
        }
        if(arrayValores[2]!=null && arrayValores[2] === arrayValores[5] && arrayValores[2]=== arrayValores[8]) {
            if(arrayValores[2]=='X') {
                return 1;
            }else {
                return -1;
            }
        }

        if(arrayValores[0]!=null && arrayValores[0] === arrayValores[4] && arrayValores[0]=== arrayValores[8]) {
            if(arrayValores[0]=='X') {
                return 1;
            }else {
                return -1;
            }
        }

        if(arrayValores[6]!=null && arrayValores[6] === arrayValores[4] && arrayValores[6]=== arrayValores[2]) {
            if(arrayValores[6]=='X') {
                return 1;
            }else {
                return -1;
            }
        }

        //estado terminal de empate
        let existeNull = false;
        for (let valor of arrayValores){
            if(valor === null){
                return null;
            }
        }

        if(!existeNull){
            return 0;
        }
        //fin de estados terminales

        return null;

    }


    calculoMiniMax(simboloActual, arrayValores){

        //verificamos si el array tiene un estado terminal
       let valorEstadoTerminal = this.obtenerValorEstadoTerminal(arrayValores);
        if(valorEstadoTerminal!=null){
            return valorEstadoTerminal;
        }

        //Para otros casos seguimos profundizando si el siguiente simbolo es X maximimizamos y si es O minimizamos
        //maximimizamos
        if(simboloActual=='O'){

            let resultados = [null,null,null,null,null,null,null,null,null];

            for (var i=0; i<arrayValores.length; i++) {
                //si encontramos posicion libre
                if(arrayValores[i]==null){
                    let clonArray = arrayValores.slice();
                    clonArray[i]='X';
                    resultados[i]=this.calculoMiniMax('X', clonArray);
                }
            }

            //ahora buscamos el maximo y lo retornamos
            let max = -9999;

            for (let valor of resultados){
                if(valor != null && valor > max){
                    max=valor;
                }
            }

            return max;

        }else{
            //minimizamos
            let resultados = [null,null,null,null,null,null,null,null,null];

            for (var i=0; i<arrayValores.length; i++) {
                //si encontramos posicion libre
                if(arrayValores[i]==null){
                    let clonArray = arrayValores.slice();
                    clonArray[i]='O';
                    resultados[i]=this.calculoMiniMax('O', clonArray);
                }
            }

            //ahora buscamos el minimo y lo retornamos
            let min = 9999;

            for (let valor of resultados){
                if(valor != null && valor < min){
                    min = valor;
                }
            }

            return min;

        }

    }





}

var datosTicTacToe = new DatosTicTacToe();

export default datosTicTacToe;