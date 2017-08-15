La siguiente aplicación se ha creado utilizando la herramienta create-react-app + mobx. 
Es una segunda version de la aplicacion tic tac toe del siguiente enlace [https://github.com/hevacho/TicTacToe](https://github.com/hevacho/TicTacToe) . En esta versión se ha implementado un algoritmo Minimax para el segundo jugador de forma que se puede jugar solo, aunque es imposible ganarle.

El algoritmo minimax consiste en generar un arbol con todas las posibles jugadas hasta llegar a un estado terminal, ganas, pierdes o empatas. A cada estado se le asigna un valor y luego para un juegador se Maximiza y para otro se Minimiza la función. Dicho en otras palabras a cada estado terminal le asignas un peso y vas escogiendo el minimo o el máximo dependiendo del momento.

En los siguientes enlaces se puede encontrar la información que he consultado para implementar este algoritmo:

- [http://neverstopbuilding.com/minimax](http://neverstopbuilding.com/minimax)
- [http://www.cs.us.es/~fsancho/?e=107](http://www.cs.us.es/~fsancho/?e=107)
- [https://es.slideshare.net/LeonardoDaVinciMX/gato-tic-tactoe](https://es.slideshare.net/LeonardoDaVinciMX/gato-tic-tactoe)


Para poder ejecutal el proyecto correctamente es necesario tener instalado la herramienta npm.
Una vez clonado el repositorio desde el propio directorio ejecutaremos npm install para instalar todas las dependencias.
Tras finalizar podremos ejecutar npm start y podremos ejectutar el juego .

![tictacMinimax.png](https://github.com/hevacho/TicTacToeMinimax/blob/master/tictactoe/create-react-app-mobx-master/tictacMinimax.png)




##Estructura del programa

El programa se encuentra estructurado mediante 4 componentes.

-Casilla: componente que representa una casilla del Juego. Tiene una posición como propiedad para poder identificarla y además es el que dispara los clicks.

- Tablero: es un componente que permite crear el tablero mediante un conjunto de casillas.

- Marcador: es un compomente que muestra la información al usuario, el turno, si ha ganado, si se ha terminado el juego...

- DatosTicTacToe: clase que almacena la estructura de datos y además es la clase donde se ha implementado el algoritmo minimax. Se ha implementado un algoritmo minimax sin poda y que completa todo el árbol.

- Juego: componente que agrupa tanto el tablero como el marcador. Es la entrada principal del programa
