/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   const resultado = devolverString("Hola, soy un string.");
console.log(resultado); // Salida: "Hola, soy un string."
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   const resultadosuma = suma(x+3*y);
   console.log(resultadosuma);
}

function resta(x, y) {
   const resultadoresta = x - y;
   return resultadoresta;
}

function divide(x, y) {
   const resultadoDivision = x / y;
   return resultadoDivision;
}

function multiplica(x, y) {
   const resultadoMultiplicacion = x * y;
   return resultadoMultiplicacion;
}


function obtenerResto(x, y) {
   const resto = x % y;
   return resto;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
