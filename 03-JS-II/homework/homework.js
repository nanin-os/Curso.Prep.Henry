// No cambies los nombres de las funciones.

function obtenerMayor( x, y ) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos

  //
  // the code :
  //
  var newIntNumber_1 = x;
  var newIntNumber_2 = y;

  var newIntMaxVal = 0;

  newIntMaxValReturn = Math.max( newIntNumber_1, newIntNumber_2 );

  return newIntMaxValReturn;
}

function mayoriaDeEdad( edad ) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  
  //
  // the code :
  //

  var newRealEdad = edad;

  var newRealReturn = 'Not Allowed';
  
  if ( newRealEdad >= 18 ) { newRealReturn = 'Allowed'; }
  if ( newRealEdad < 18 ) { newRealReturn = 'Not allowed'; }

  return newRealReturn;
}
  
function conection( status ) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  //
  // the code :
  //
  var newStringStatusValue = status;

  var newStringStatusReturn = 'Offline';

  if ( newStringStatusValue == 1 ) { newStringStatusReturn = 'Online'; }
  if ( newStringStatusValue == 2 ) { newStringStatusReturn = 'Away'; }

  return newStringStatusReturn;
}

function saludo( idioma ) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"

  //
  // the code :
  //
  var newStringLang = idioma;

  var newStringLangReturn = 'Hola!';

  if( newStringLang == 'aleman' ) { newStringLangReturn = 'Guten Tag!'; }
  if( newStringLang == 'mandarin' ) { newStringLangReturn = 'Ni Hao!'; }
  if( newStringLang == 'ingles') { newStringLangReturn = 'Hello!'; }
  
  return newStringLangReturn;
  }

function colors( color ) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  //
  // the code :
  //
  var newStringColor = color;

  switch( newStringColor ){
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }
}

function esDiezOCinco( numero ) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newRealNumber = numero;

  var newBooleanReturn = false;

  if ( ( newRealNumber == 10 ) || ( newRealNumber == 5 ) ) { newBooleanReturn = true; }
  
  return newBooleanReturn;
}

function estaEnRango( numero ) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  
  //
  // the code :
  //
  var newRealNumber = numero;

  var newBooleanReturn = false;

  if ( ( newRealNumber < 50 ) && ( newRealNumber > 20 ) ) { newBooleanReturn = true; }
  
  return newBooleanReturn;
}

function esEntero( numero ) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`

  //
  // the code :
  //
  var newRealNumber = numero;

  var newBooleanReturn = false;

  if ( ( newRealNumber - Math.floor( newRealNumber ) ) == 0 ) { newBooleanReturn = true; }
    
  return newBooleanReturn;

}

function fizzBuzz( numero ) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  //
  // the code :
  //
  var newRealNumber = numero;
  var newStringReturn = numero;

  if ( newRealNumber % 3 == 0 ) { newStringReturn = 'fizz'; }
  if ( newRealNumber % 5 == 0 ) { newStringReturn = 'buzz'; }
  if ( ( newRealNumber % 3 == 0 ) && ( newRealNumber % 5 == 0 ) ) { newStringReturn = 'fizzbuzz'; }

  return newStringReturn;
}

function operadoresLogicos( num1, num2, num3 ) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  //
  // the code :
  // 
  var newRealNumber_1 = num1;
  var newRealNumber_2 = num2;
  var newRealNumber_3 = num3;

  var newStringReturn = false;

  if ( ( newRealNumber_1 > newRealNumber_2 ) && ( newRealNumber_1 > newRealNumber_3 ) && ( newRealNumber_1 > 0 ) ) {
    newStringReturn = 'Número 1 es mayor y positivo';
  }

  if ( ( newRealNumber_1 < 0 ) || ( newRealNumber_2 < 0 ) || ( newRealNumber_3 < 0 ) ) {
    newStringReturn = 'Hay negativos';
  }

  if ( ( newRealNumber_3 > newRealNumber_1 ) && ( newRealNumber_3 > newRealNumber_2 ) ) {
    newStringReturn = newRealNumber_3 + 1;
  }

  if ( ( newRealNumber_1 == 0 ) || ( newRealNumber_2 == 0 ) || ( newRealNumber_3 == 0 ) ) {
    newStringReturn = 'Error';
  }

return newStringReturn;
}

function esPrimo( numero ) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  //
  // the code :
  //
  var newRealNumber = numero;
  var newBooleanReturn = true;

  if ( newRealNumber <= 1) {

    newBooleanReturn = false;
    return newBooleanReturn;

  } else {

    for ( let i = 2; i < newRealNumber; i++ ) {

      if ( newRealNumber % i == 0 ) {
          newBooleanReturn = false;
          return newBooleanReturn;
        }
      }
    }
    return newBooleanReturn;
}

function esVerdadero( valor ){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  //
  // the code :
  //
  var newBooleanValue = valor;

  var newStringReturn = 'Soy falso';

  if ( newBooleanValue ) { newStringReturn = 'Soy verdadero'; }

  return newStringReturn;
}

function tablaDelSeis( ){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  //
  // the code :
  //
  var newIntegerNumber = 6;
  
  let newTableArray = []
  
  for (let i = 0; i <= 10; i++ ){
    newTableArray[ i ] = newIntegerNumber * i;
    }
  return newTableArray;  
  }

function tieneTresDigitos( numero ){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  //
  // the code :
  //
  var newRealNumber = numero;

  var newBooleanReturn = false;

  if ( newRealNumber.toString().length == 3 ){ newBooleanReturn = true; }

  return newBooleanReturn;
}

function doWhile( numero ) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  //
  // the code :
  //  
  var newRealNumber = numero;
  var newCounter = 0;

  do {

    newCounter = newCounter + 5;

    newRealNumber = newRealNumber + 5;

  } while (newCounter < 40 );

  return newRealNumber;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
