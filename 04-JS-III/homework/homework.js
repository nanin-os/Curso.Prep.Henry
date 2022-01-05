// No cambies los nombres de las funciones.

function devolverPrimerElemento( array ) {
  // Devuelve el primer elemento de un array (pasado por parametro)
  
  //
  // the code :
  //

  var newArrayObject = array;
  var newObjectReturn = '';

  newObjectReturn = newArrayObject[ 0 ];

  return newObjectReturn;
}


function devolverUltimoElemento( array ) {
  // Devuelve el último elemento de un array
  
  //
  // the code :
  //
  
  var newArrayObject = array;
  var newObjectReturn = '';

  newObjectReturn = newArrayObject[ newArrayObject.length - 1 ];

  return newObjectReturn;
}


function obtenerLargoDelArray( array ) {
  // Devuelve el largo de un array

  //
  // the code :
  // 

  var newArrayObject = array;
  var newObjectReturn = '';

  newObjectReturn = ( newArrayObject.length );

  return newObjectReturn;
}


function incrementarPorUno( array ) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  
  //
  // the code :
  //
  var newArrayObject = array;
  var newObjectReturn = '';

  for ( let i = 0; i < newArrayObject.length; i++ ) {
    newArrayObject[ i ] = ( newArrayObject[ i ] + 1 );
  }

  return newArrayObject;
}


function agregarItemAlFinalDelArray( array, elemento ) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  
  //
  // the code :
  //

  var newArrayObject = array;
  var newElementObject = elemento;
  
  newArrayObject.push( newElementObject );
  
  return newArrayObject;
}


function agregarItemAlComienzoDelArray( array, elemento ) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  
  //
  // the code :
  //

  var newArrayObject = array;
  var newElementObject = elemento;
  
  newArrayObject.unshift( newElementObject );
  
  return newArrayObject;
}


function dePalabrasAFrase( palabras ) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  
  //
  // the code :
  //

  var newArrayObject = palabras;
  var newStringObjectReturn = newArrayObject[ 0 ];
  
    for ( let i = 1; i < newArrayObject.length; i++ ){

    newStringObjectReturn = ( newStringObjectReturn.concat( ' ', newArrayObject[ i ] ) );

  }

  return newStringObjectReturn;
}


function arrayContiene( array, elemento ) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  
  //
  // the code :
  //
  
  var newArrayObject = array;
  var newElementObject = elemento;
  
  var newBooleanReturn = false;
  
  for ( let i = 0; i < newArrayObject.length; i++ ){

    if ( newArrayObject[ i ] == newElementObject ){
      newBooleanReturn = true;
    }

  }
    
  return newBooleanReturn;
}


function agregarNumeros( numeros ) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  
  //
  // the code :
  //

  var newArrayObject = numeros;
  var newObjectReturn = newArrayObject[ 0 ];

  for ( let i = 1; i < newArrayObject.length; i++ ){
    
    newObjectReturn = newObjectReturn + newArrayObject[ i ];

  }

  return newObjectReturn;
}


function promedioResultadosTest( resultadosTest ) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  
  //
  // the code :
  //

  var newArrayObject = resultadosTest;
  var newObjectReturn = newArrayObject[ 0 ];

  for ( let i = 1; i < newArrayObject.length; i++ ){
    
    newObjectReturn = ( newObjectReturn + newArrayObject[ i ] ) ;

  }

  newObjectReturn = newObjectReturn / newArrayObject.length;

  return newObjectReturn;
}


function numeroMasGrande( numeros ) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  
  //
  // the code :
  //

  var newArrayObject = numeros;
  var newObjectReturn = 0;

  newObjectReturn = Math.max.apply( null, newArrayObject );

  return newObjectReturn;
}


function multiplicarArgumentos( ) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  
  //
  // the code :
  //
  var newObjectReturn;

  if( arguments.length < 1) return 0;
  
  var newObjectReturn = 1;

  for( let i = 0; i < arguments.length; i++ ) {

    newObjectReturn = newObjectReturn * arguments[ i ];
  }

  return newObjectReturn;
}


function cuentoElementos( arreglo ){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  
  //
  // the code :
  //

  var newArrayObject = arreglo;
  var newObjectReturn = 0;

  for ( let i = 0; i < newArrayObject.length ; i++ ){

    if ( newArrayObject[ i ] > 18 ){ newObjectReturn = ( newObjectReturn + 1 ); }

  }

  return newObjectReturn;
}


function diaDeLaSemana( numeroDeDia ) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  
  //
  // the code :
  //

  var newArrayObject = numeroDeDia;
  var newObjectReturn = '';

  if ( newArrayObject == 1 ){ newObjectReturn = ( 'Es fin de semana' ); }
  if ( newArrayObject == 2 ){ newObjectReturn = ( 'Es dia Laboral' ); }
  if ( newArrayObject == 3 ){ newObjectReturn = ( 'Es dia Laboral' ); }
  if ( newArrayObject == 4 ){ newObjectReturn = ( 'Es dia Laboral' ); }
  if ( newArrayObject == 5 ){ newObjectReturn = ( 'Es dia Laboral' ); }
  if ( newArrayObject == 6 ){ newObjectReturn = ( 'Es dia Laboral' ); }
  if ( newArrayObject == 7 ){ newObjectReturn = ( 'Es fin de semana' ); }

    return newObjectReturn;
} 


function empiezaConNueve( n ) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  
  //
  // the code :
  //

  var newArrayObject = n;
  var newBooleanReturn = false;

  newStringArrayObject = newArrayObject.toString();

  if ( newStringArrayObject[ 0 ] == '9' ){ newBooleanReturn = true; }

  return newBooleanReturn;
}


function todosIguales( arreglo ) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  
  //
  // the code :
  //

  var newArrayObject = arreglo;
  var newBooleanReturn = false;

  for ( let i = 1; i < newArrayObject.length; i++ ){

    if ( newArrayObject[ i - 1 ] === newArrayObject[ i ]){ newBooleanReturn = true }

  }
  
  return newBooleanReturn;

} 

function mesesDelAño( array ) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  
  //
  // the code :
  //
  
  var newArrayObject = array;
  var newArrayReturn = [];
  var intCounter = 0;
  var newBooleanReturn = false;

  for ( let i = 0; i < newArrayObject.length; i++ ){

    if ( newArrayObject[ i ] === 'Enero' ){ newArrayReturn.push( 'Enero' ); intCounter++; }
    if ( newArrayObject[ i ] === 'Marzo' ){ newArrayReturn.push( 'Marzo' ); intCounter++; }
    if ( newArrayObject[ i ] === 'Noviembre' ){ newArrayReturn.push( 'Noviembre' ); intCounter++; }

  }
  if ( newArrayReturn.length < 3 ){ newArrayReturn = 'No se encontraron los meses pedidos' }

  return newArrayReturn;
}


function mayorACien( array ) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  
  //
  // the code :
  //
  
  var newArrayObject = array;
  var newArrayReturn = [];
  var intCounter = 0;
  var newBooleanReturn = false;

  for ( let i = 0; i < newArrayObject.length; i++ ){

    if ( newArrayObject[ i ] > 100 ){ newArrayReturn.push( newArrayObject[ i ] ); }

  }

  return newArrayReturn;  
}


function breakStatement( numero ) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  
  //
  // the code :
  //
  
  var newArrayObject = numero;
  var newArrayReturn = [];
  var intCounter = 0;
  var newBooleanReturn = false;

  for ( let i = 0; i < 10; i++ ){

    newArrayObject = ( newArrayObject + 2 );

    newArrayReturn[ i ] = newArrayObject;

    if ( newArrayObject === i ){ 
      newArrayReturn = 'Se interrumpió la ejecución';
      break 
     }

  }

  return newArrayReturn;  
}


function continueStatement( numero ) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'

  //
  // the code :
  //

  var newArrayObject = numero;
  var newArrayReturn = [];
  var intCounter = 0;
  var newBooleanReturn = false;

  for ( let i = 0; i < 10; i++ ){

    if ( i === 5 ){ 

      continue; 
    }
    else{

      newArrayObject = ( newArrayObject + 2 );
      newArrayReturn.push( newArrayObject );

    }
  }

  return newArrayReturn;  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
