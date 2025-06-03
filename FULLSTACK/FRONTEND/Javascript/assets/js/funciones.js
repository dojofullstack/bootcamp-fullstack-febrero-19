

// funciones.js
console.log("funciones.js cargado");

// Funciones en JavaScript


function saludar() {
    console.log("Hola, bienvenido a JavaScript");
}


// saludar();

function maquinaNaranjas(naranjas, miel, panela="no") {
    console.log("Maquina de naranjas");
    console.log("Naranjas: " + naranjas);
    console.log("Miel: " + miel);
    console.log("Panela: " + panela);
    
    if (naranjas > 0) {

        if (miel){
        //  console.log("Exito, se ha hecho jugo de naranja con miel");
            return "Exito, se ha hecho jugo de naranja con miel";
        } else {
            // console.log("Exito, se ha hecho jugo de naranja sin miel");
            return "Exito, se ha hecho jugo de naranja sin miel"
        }

    } else {
        // console.log("Fallo, no hay suficientes naranjas");
        return "Fallo, no hay suficientes naranjas";
    }

}




// const salidaMaquina = maquinaNaranjas(5, true, "si");
// console.log(salidaMaquina);



function enrrollMemberDojofullstack(nombre, email, callback){
    console.log("Enrrollando al miembro de Dojo Full Stack");
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    // Llamar al callback para enviar un email
    // console.log(callback);
    
    if (nombre && email) {
        callback(nombre, email);
        return `Miembro ${nombre} con email ${email} enrrollado exitosamente.`;
    } else {
        return "Fallo al enrrollar al miembro, faltan datos.";
    }
}


function sendEmailSmtp(nombre, email) {
    console.log("Enviando email a " + nombre + " al correo " + email);
    // Aquí iría la lógica para enviar el email
    return `Email enviado a ${nombre} (${email})`;
}


// console.log( enrrollMemberDojofullstack("Henry", "henry@gmail.com") );

enrrollMemberDojofullstack("Henry", "henry@gmail.com", sendEmailSmtp)