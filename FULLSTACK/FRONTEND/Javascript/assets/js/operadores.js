

// operadores logicos

// OPerador AND, OR y Negacion NOT

console.log("Operadores lógicos AND, OR y NOT");
console.log("Operador AND &&");
// Operador AND &&
const isUserLoggedIn = true; // Simula que el usuario está logueado
const isUserPremium = false; // Simula que el usuario está logueado

isUserLoggedIn && isUserPremium; // true si ambos son true

console.log(isUserLoggedIn && isUserPremium); // false

if (isUserLoggedIn && isUserPremium) {
    console.log("El usuario está logueado y es premium, activar beneficios ChatGPT Premium");
}

////////////////////

console.log("Operador OR ||");

console.log(isUserLoggedIn || isUserPremium);


if (isUserLoggedIn || isUserPremium) {
    console.log("El usuario está logueado o es premium, activar beneficios ChatGPT Premium");
}

////////////////////
console.log("Operador NOT !");

console.log(!isUserPremium); // false, porque isUserLoggedIn es true


////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Operadorodres de comparación");

let nombre = "Enrique";
let edad = 30;


if (nombre !== "Enrique") {
    console.log("El nombre no es Enrique");
}


if (nombre === "Enrique") {
    console.log("El nombre es Enrique");
} else {
    console.log("El nombre no es Enrique");
}


if (edad <= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}