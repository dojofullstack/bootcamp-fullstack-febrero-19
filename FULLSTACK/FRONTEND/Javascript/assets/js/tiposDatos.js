

// Tipos de datos
// - String
// - Number
// - Boolean
// - Object
// - Array
// - Function


// Tipo de dato String

let nombre;
// nombre = `Henry  `;
nombre = "Henry Enrique Perez";

let apellido = "Gomez";

console.log(nombre);
console.log(apellido);

console.log(`Juan Perez ${apellido}`);



// praticando con metodos mas usados
console.log( nombre.concat("Gomez")   );

console.log( nombre.toUpperCase()   );
console.log( nombre.toLowerCase()   );
console.log( nombre.length   );

// trim() elimina los espacios en blanco al inicio y al final de la cadena

let comentario = "\n        Hola, soy un comentario     \n  ";
console.log( comentario.trim()   );

// indexOf() devuelve la posicion de la primera ocurrencia del caracter o cadena
console.log( nombre.indexOf("z")   );

// includes() devuelve true si la cadena contiene el caracter o cadena
console.log( nombre.includes("Carlos")   );
console.log( nombre.includes("Henry")   );

// startWith() devuelve true si la cadena comienza con el caracter o cadena
console.log( nombre.startsWith("Hen")   );
console.log( nombre.endsWith("que")   );

// slice() devuelve una parte de la cadena
console.log( nombre.slice(3, 5)   ); // devuelve los primeros 5 caracteres

// split() divide la cadena en un array de subcadenas
console.log( nombre.split(" ")   ); // divide la cadena en un array de subcadenas por el espacio

// replace() reemplaza una parte de la cadena por otra 
console.log( nombre.replace("Henry", "Carlos")   ); // reemplaza "Henry" por "Carlos"

// nombre.search("Enrique"); // devuelve la posicion de la primera ocurrencia de "Enrique"
console.log(nombre.search("Enrique")   ); // devuelve la posicion de la primera ocurrencia de "Enrique"


typeof nombre; // devuelve el tipo de dato de la variable

console.log(typeof nombre); // "string"

// -----------------
// // Tipo de dato Number
let edad = 30;
let precio = 9.75;

console.log(edad);
console.log(precio);

console.log(typeof edad)
console.log(typeof precio)

// operaciones basicas
console.log(edad + 5); // suma
console.log(edad - 5); // resta
console.log(edad * 2); // multiplicacion
console.log(edad / 2); // division
console.log(edad % 2); // modulo (resto de la division)

// -----------
// edad = edad + 5;
edad += 5; // suma y asignacion
edad -= 5; // resta y asignacion
edad *= 2; // multiplicacion y asignacion
edad /= 2; // division y asignacion
edad %= 2; // modulo y asignacion

console.log(edad);

// -------------------------------------

// Tipo de dato Boolean
let esMayorDeEdad = true
let isUserPremium = false;

console.log(esMayorDeEdad);
console.log(isUserPremium);
console.log(typeof esMayorDeEdad); // "boolean"

// ------------------------------------

// Tipo de dato array
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas);
console.log(typeof frutas); // "object" (los arrays son un tipo de objeto en JavaScript)
console.log(frutas.length); // longitud del array
console.log(frutas[0]); // acceso al primer elemento del array
console.log(frutas[1]); // acceso al segundo elemento del array
console.log(frutas[2]); // acceso al tercer elemento del array

// agregar un elemento al final del array
frutas.push("uva");
console.log(frutas); // ["manzana", "banana", "naranja", "uva"]

// eliminar el ultimo elemento del array
frutas.pop();


// frutas.pop();
// frutas.pop();
console.log(frutas); // ["manzana", "banana", "naranja"]

// agregar un elemento al inicio del array
frutas.unshift("kiwi");
console.log(frutas); // ["kiwi", "manzana", "banana", "naranja"]


frutas[2] = "pera"; // modificar el tercer elemento del array
console.log(frutas); // ["kiwi", "manzana", "pera", "naranja"]


frutas.shift(); // eliminar el primer elemento del array
console.log(frutas); // ["manzana", "pera", "naranja"]

// eliminar un elemento del array por su indice
frutas.splice(1, 1); // eliminar el segundo elemento del array

console.log(frutas); // ["manzana", "naranja"]

// -----------------------------

// / tipo de datos Object
const persona = {
    nombre: "Henry",
    apellido: "Gomez",
    edad: 30,
    isPremium: true,
    lenguajes: ["JavaScript", "Python", "Java"],
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Ciudad Falsa",
    },
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
};


console.log(typeof persona); // "object"

console.log(persona.nombre); // acceso a la propiedad nombre del objeto persona
console.log(persona["nombre"]); // acceso a la propiedad apellido del objeto persona
console.log(persona.edad); // acceso a la propiedad edad del objeto persona
console.log(persona.lenguajes); // acceso a la propiedad lenguajes del objeto persona

persona.nombre = "Carlos"; // modificar la propiedad nombre del objeto persona
persona.apellido = "Perez"; // modificar la propiedad apellido del objeto persona

console.log(persona);

persona.identificacion = "123456789"; // agregar una nueva propiedad al objeto persona

// delete persona.identificacion;
// persona.identificacion = null;
// persona.saludar(); // llamar al metodo saludar del objeto persona


// ----------
// Tipos de datos Function
function maquinaDeNaranajas(naranjas) {
    return `Tengo ${naranjas} naranjas`;
}


// console.log( maquinaDeNaranajas(12) ); // "Tengo 10 naranjas"

const jugoDeNaranja = maquinaDeNaranajas(10);

console.log(jugoDeNaranja); // "Tengo 10 naranjas"