

console.log("tipos_funciones.js cargado");



function saludar() {
    console.log("Hola, bienvenido a JavaScript");
}

// saludar();


const realizarDeporte = function (nombreDeporte) {
    console.log(`Realizando el deporte ${nombreDeporte}`);
}


// realizarDeporte("futbol");

// funcion flecha o Arrow function

const manejarAuto = (marca, modelo) => {
    console.log(`Manejando el auto ${marca} ${modelo}`);
}


manejarAuto("Toyota", "Corolla");