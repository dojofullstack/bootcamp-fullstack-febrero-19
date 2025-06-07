

console.log("iteradores.js cargado");

// Iteradores en JavaScript
// forLoop, forEach, map, filter, reduce, for...of, for...in


// forLoop
const pokemones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Jigglypuff", "Meowth", "Eevee", "Snorlax", "Gengar", "Mewtwo"];

// los breakpoint (break y continue) se usan para controlar el flujo del bucle



// for ( let i = 0; i < pokemones.length; i++) {

//     const nombrePokemon = pokemones[i]; 

//     if( nombrePokemon === "Meowth") {
//         console.log("¡Encontré a Meowth!");
//         // break; // Detiene el bucle
//         continue; // Salta a la siguiente iteración
//     }

//     console.log(`Pokemon ${i + 1}: ${pokemones[i]}`);

//     console.log(`Consultar API DATA Pokemon: ${nombrePokemon}`);
// }


pokemones.forEach( (pokemon, index) => {
    if( pokemon === "Meowth") {
        console.log("¡Encontré a Meowth!");
        // break; // No se puede usar break en forEach
        return; // Sale de la función actual, no del bucle
    }

    console.log(`Pokemon ${index + 1}: ${pokemon}`);
    console.log(`Consultar API DATA Pokemon: ${pokemon}`);
})


//for...of
// for (const pokemon of pokemones) {
//     console.log(`Pokemon: ${pokemon}`);

//     if( pokemon === "Meowth") {
//         console.log("¡Encontré a Meowth!");
//         // break; // Detiene el bucle
//         continue; // Salta a la siguiente iteración
//     }
//     // console.log(pokemones.indexOf(pokemon))
// }


// forEach y map

// function saludarPokemon(pokemon) {
//     console.log(`Hola! Pokemon ${pokemon}`);
// }


// const iteadoresPokedex =  pokemones.forEach( (pokemon) => {
//     console.log(`Hola! Pokemon ${pokemon}`);

//     if( pokemon === "Meowth") {
//         console.log("¡Encontré a Meowth!");
//         // break; // No se puede usar break en forEach
//         return "¡Encontré a Meowth! Mewoo"; // Sale de la función actual, no del bucle
//     }

// } )


const iteadoresPokedex =  pokemones.map( (pokemon) => {
    console.log(`Hola! Pokemon ${pokemon}`);

    if( pokemon === "Meowth") {
        console.log("¡Encontré a Meowth!");
        // break; // No se puede usar break en forEach
        return "¡Encontré a Meowth! Mewoo"; // Sale de la función actual, no del bucle
    }

} )

console.log(iteadoresPokedex);



////////////////////
// ciclo while

let isMonitorAntivirus = true;

while (isMonitorAntivirus) {
    console.log("El monitor antivirus está activo");
    // Aquí podrías agregar una condición para salir del bucle
    // Por ejemplo, si el usuario decide desactivar el antivirus
    // isMonitorAntivirus = false; // Cambia a false para salir del bucle
    window.alert("El monitor antivirus está activo");
    const checkTime = new Date();
    if (checkTime.getDay() === 5 && checkTime.getHours() == 20) {
        console.log("Hoy es viernes, desactivando el monitor antivirus");
        isMonitorAntivirus = false; // Cambia a false para salir del bucle
    }
}