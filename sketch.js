//2016 07 20 wednesday
//universidad san sebastián
// fondo verde y elipse que siga al mouse

//funcion setuo se jecuta una vez al principio
function setup() {
  //createCanvas(dimHor. dimVer)
  createCanvas(600, 600);
  //backgorund (red, green, blue)
  background(0, 240, 100);
  
  estilo1();
}
//camelCase es escribir la primera palabra con minuscula y las siguientes con Mayuscula

//variables
//para usar una variable, debemos declararla
//declarar hace que el computador sepa que existe
var diametro;
//solo despues de declarar una variable, podemos asignarle un valor
diametro = 10;

//hay variables de dos tipos.
//las locales y las globales
//las variables globales viven fuera de una función
//y las locales dentro de una función
//esto tiene qye ver con la DECLARACIÓN

//las funciones también pueden ser declaradas
function nombreFuncion(){
  //aquí van las instruciones de la funcion
}
//para ejecutar una función
nombreFuncion();




//funcion draw() se ejecuta después de setup() y se ejecuta 60 veces por segundo
function draw() {
  //declarar variable ancho del borde
  var anchoBorde = 1;

  
  //ellipse(posX, posY, width, height)
  //dibuja una elipsis
  //noFill(); para hacerlo sin color
  
  //background(0, 100, 130);
  
  //definamos el tamaño del borde
  //strokeWeight(px)
  strokeWeight(anchoBorde);
  
  //color del borde
  //stroke(red, green, blue)
  stroke(200, 0, 100);
  
  //fill(red, green, blue) elige el color del relleno
  fill(random(255), random(222), 0);
  
  ellipse(mouseX, mouseY, diametro, diametro);
  

  
  
  
  diametro = diametro + 1;
}

//declaracion de funcion de estilo de elipse

function estilo1(){
  
  
    //definamos el tamaño del borde
  //strokeWeight(px)
  strokeWeight(10);
  
  //color del borde
  //stroke(red, green, blue)
  stroke(200, 0, 100);
  
  //fill(red, green, blue) elige el 
}