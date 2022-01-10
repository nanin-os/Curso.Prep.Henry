// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'nanin.os';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 23.05;       // real number

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString( str ) {
  // 'return' la string provista: str

  //
  // the code
  //

    var newStringChar = str;

    return newStringChar;
}

function suma( x, y ) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newNumberReturn = ( newNumber_1 + newNumber_2 );

  return ( newNumberReturn );
}

function resta( x, y ) {
  // Resta "y" de "x" y devuelve el valor

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newNumberReturn = ( newNumber_1 - newNumber_2 );

  return ( newNumberReturn );
}

function multiplica( x, y ) {
  // Multiplica "x" por "y" y devuelve el valor

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newNumberReturn = ( newNumber_1 * newNumber_2 );

  return ( newNumberReturn );
}

function divide( x, y ) {
  // Divide "x" entre "y" y devuelve el valor

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newNumberReturn = ( newNumber_1 / newNumber_2 );

  return ( newNumberReturn );
}

function sonIguales( x, y ) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newBooleanVar = false;
  
  if ( newNumber_1 === newNumber_2 ) {
    newBooleanVar = true;
  }

  return newBooleanVar;
}

function tienenMismaLongitud( str1, str2 ) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newString_1 = str1;
  var newString_2 = str2;

  var newBooleanVar = false;
  
  if ( newString_1.length === newString_2.length ) {
    newBooleanVar = true; 
  }

  return newBooleanVar;
}

function menosQueNoventa( num ) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newNumber = num;

  var newBooleanVar = false;

  if ( newNumber < 90 ) {
    newBooleanVar = true;
  }

  return newBooleanVar;
}

function mayorQueCincuenta( num ) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newNumber = num;

  var newBooleanVar = false;

  if ( newNumber > 50 ) {
    newBooleanVar = true;
  }
  
  return newBooleanVar;
}

function obtenerResto( x, y ) {
  // Obten el resto de la división de "x" entre "y"

  //
  // the code :
  //
  var newNumber_1 = x;
  var newNumber_2 = y;

  var newNumberRealReturn = 0.00;
  
  newNumberRealReturn = ( newNumber_1 % newNumber_2 );

  return newNumberRealReturn;
}

function esPar( num ) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newNumber = num;

  var newBooleanVar = false;

  if ( newNumber % 2 === 0 ) {
    newBooleanVar = true;
  }

  return newBooleanVar;
}

function esImpar( num ) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"

  //
  // the code :
  //
  var newNumber = num;

  var newBooleanVar = true;

  if ( ( newNumber % 2 ) === 0 ) {
    newBooleanVar = false;
  }

  return newBooleanVar;
}

function elevarAlCuadrado( num ) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!

  //
  // the code :
  //
  var newNumber = num;

  var newRealNumberReturn = 0.00;

  newRealNumberReturn = Math.pow( newNumber, 2 );

  return newRealNumberReturn;
}

function elevarAlCubo( num ) {
  // Devuelve el valor de "num" elevado al cubo

  //
  // the code :
  //
  var newNumber = num;

  var newRealNumber = 0.00;

  newRealNumber = Math.pow( newNumber, 3 );

  return newRealNumber;
}

function elevar( num, exponent ) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"

  //
  // the code :
  //
  var newNumber = num;
  var newExponente = exponent;

  var newRealNumber = 0.00;

  newRealNumber = Math.pow( newNumber, newExponente );

  return newRealNumber;
}

function redondearNumero( num ) {
  // Redondea "num" al entero más próximo y devuélvelo

  //
  // the code :
  //
  var newNumber = num;

  var newNumberReturn = 0;

  newNumberReturn = Math.round( newNumber );

  return newNumberReturn;
}

function redondearHaciaArriba( num ) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo

  //
  // the code :
  //
  var newNumber = num;

  var newNumberReturn = 0;

  newNumberReturn = Math.ceil( newNumber );

  return newNumberReturn;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

  //
  // the code :
  //
  var newRealNumberReturn = 0.00;

  newRealNumberReturn = Math.floor(Math.random( ) * 1 );

  return newRealNumberReturn;
}

function esPositivo( numero ) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si
  //   el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  //
  // the code :
  //
  var newNumber = numero;

  var newStringCharReturn = false;

  if ( newNumber > 0 ) {
    newStringCharReturn = 'Es positivo';
  } else if ( newNumber < 0 ) {
    newStringCharReturn = 'Es negativo';
  }

  return newStringCharReturn;
}

function agregarSimboloExclamacion( str ) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"

  // 
  // the code :
  //
   var newStringChar = str;

   newStringChar = ( newStringChar + '!' );

   return newStringChar;
}

function combinarNombres( nombre, apellido ) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  
  // 
  // the code :
  //
  var newStringCharNombre = nombre;
  var newStringCharApellido = apellido;

  newStringCharReturn = ( newStringCharNombre + ' ' + newStringCharApellido );

  return newStringCharReturn;
}

function obtenerSaludo( nombre ) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"

  // 
  // the code :
  //
  var newStringCharNombre = nombre;

  newStringCharReturn = ( 'Hola ' + newStringCharNombre + '!' );

  return newStringCharReturn;
}

function obtenerAreaRectangulo( alto, ancho ) {
  // Retornar el area de un rectángulo teniendo su altura y ancho

  // 
  // the code :
  //
  var newRealHeight = alto;
  var newRealWidth = ancho;

  var newRealBaseReturn = 0.00;

  newRealBaseReturn = ( newRealHeight * newRealWidth );

  return newRealBaseReturn;
}


function retornarPerimetro( lado ){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.

  // 
  // the code :
  //
  var newRealHeight = lado;
  
  var newRealPerimeterReturn = 0.00;

  newRealPerimeterReturn = ( newRealHeight * 4 );

  return newRealPerimeterReturn;
}


function areaDelTriangulo( base, altura ){
  //Desarrolle una función que calcule el área de un triángulo.

  // 
  // the code :
  //
  var newRealHeight = base;
  var newRealWidth = altura;

  var newRealAreaReturn = 0.00;

  newRealAreaReturn = ( ( newRealHeight * newRealWidth ) / 2 );

  return newRealAreaReturn;
}


function deEuroAdolar( euro ){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.

  // 
  // the code :
  //
  var newRealEUMoney = euro;

  var newRealConversionRatio = 1.20;
  var newRealUSMoneyReturn = 0.00;

  newRealUSMoneyReturn = ( newRealEUMoney * newRealConversionRatio );

  return newRealUSMoneyReturn;
}


function esVocal( letra ){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".

  // 
  // the code :
  //
  var newStringChar = letra;

  var newStringReturn = 'Dato incorrecto'

  if ( newStringChar.length === 1 ) {

    if ( newStringChar.includes( 'a' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'e' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'i' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'o' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'u' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'A' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'E' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'I' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'O' )) { newStringReturn = 'Es vocal'; }
    if ( newStringChar.includes( 'U' )) { newStringReturn = 'Es vocal'; }
  }
  
  return newStringReturn;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
