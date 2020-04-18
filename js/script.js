var nplayers;   //Num jugadores
var tsize;      //tamaño tablero
var tablero;
fila = [];
col = [];
var tablero = [];
//Declaramos objeto player
//var player = new Object(),


//Game game = new Game;
//class Game {
  //  players;
    
//}

function seleccionaBarco (x,y){
    console.log("has seleccionado "+x+", "+y);
}

function startGame() {

    nplayers = document.getElementById("nplayers").selectedIndex + 2;
    console.log(nplayers);
    tsize = document.getElementById("tsize").selectedIndex + 4;
    console.log(tsize);
    
    //Declaramos tablero
    for(var i = 0;i<tsize;i++){
        tablero[i] = new Array(tsize);
        for(var j = 0;j<tsize;j++){
            tablero[i][j] = 0;
            
        }

    }
    
    //Declaramos eje x y y del tablero
    var x;
    var y;  
    
    //Dibuja tablero
    dibujaTablero(tsize);
    

    
}






function dibujaTablero(tablero){
    document.getElementById('menustart').style.display = 'none';
    var table = document.getElementById('tablero');
    if(tsize==4){
        tempDiv = "<div id='tablero4'></div>" ;
        table.insertAdjacentHTML('afterbegin',tempDiv); 
        var t = document.getElementById('tablero4');
    }   
    if(tsize==5){
        tempDiv = "<div id='tablero5'></div>" ;
        table.insertAdjacentHTML('afterbegin',tempDiv); 
        var t = document.getElementById('tablero5');
    }
    if(tsize==6){
        tempDiv = "<div id='tablero6'></div>" ;
        table.insertAdjacentHTML('afterbegin',tempDiv); 
        var t = document.getElementById('tablero6');
    }
    //document.writeln("<div id='tablerop1'>");
    var tempDiv;
    for(var i = tsize;i>0;i--){     
        for(var j = tsize;j>0;j--){
            tempDiv = "<div onclick='seleccionaBarco("+i+","+j+")'></div>" ;
            t.insertAdjacentHTML('afterbegin',tempDiv);
        }
    }

}