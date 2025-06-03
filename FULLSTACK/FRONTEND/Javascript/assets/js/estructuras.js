

console.log("estructuras.js cargado");

// tipos de condiciones, simples, compuestas y anidadas

const isMienbro = false;

if (isMienbro) {
    console.log("Eres miembro");
    console.log("Eres miembro");
    console.log("Eres miembro");
    console.log("Eres miembro");
} else {
    console.log("No eres miembro");
    console.log("No eres miembro");
    console.log("No eres miembro");
    console.log("No eres miembro");
}

// condiciones anidadas

const isAdmin = true;
const isUserPremium = true;


if (isMienbro) {
    console.log("Eres miembro");
} else if (isUserPremium) {
    console.log("Eres usuario premium");
} else if (isAdmin) {
    console.log("Eres administrador");
} 


console.log("Fin de las condiciones");