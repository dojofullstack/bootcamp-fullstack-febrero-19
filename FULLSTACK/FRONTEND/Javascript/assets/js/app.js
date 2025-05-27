
console.log("Welcome to the app.js file!");

// variables

// forma usando var
var puntajeJugador = 10;
var dificultadJuego = "facil";
var isGamePremium = true;

// dificultadJuego = "dificil";
// puntajeJugador = 3;
// isGamePremium = false;
// -----------------------------

// forma usando let
let puntajeJugador2 = 10;
let dificultadJuego2 = "facil";
let isGamePremium2 = true;


// constantes
const username = "jose";
const avatar = "https://www.example.com/avatar.png";

const autoDeportivo = {
    marca: "Ferrari",
    modelo: "488",
    anio: 2020,
    color: "rojo",
    precio: 250000,
    esNuevo: true,
};

console.log(username);

autoDeportivo.marca = "Lamborghini";
console.log(autoDeportivo.marca);
autoDeportivo.aceleracion = "0-100km/h en 3.5s";

console.log(autoDeportivo.aceleracion);

console.log(autoDeportivo);



const setAutos = [
    "Lamborghini",
    "Ferrari",
    "Porsche",
    "Bugatti",
    "McLaren",
    "Koenigsegg",
    "Aston Martin",
    {
        marca: "Lamborghini",
        modelo: "Aventador",
    },
    {
        marca: "Ferrari",
        modelo: "488",
    },
    {
        marca: "Porsche",
        modelo: "911",
    },
    {
        marca: "Bugatti",
        modelo: "Chiron",
    },
    {
        marca: "McLaren",
        modelo: "720S",
    },
    {
        marca: "Koenigsegg",
        modelo: "Agera RS",
    },
    {
        marca: "Aston Martin",
        modelo: "DB11",
    },  
]

console.log(setAutos.length );

console.log(setAutos[0]);
console.log(setAutos[1]);
console.log(setAutos[ setAutos.length - 1 ]);


// function saludar(nombre) {
//     console.log("Hola " + nombre);
// }
