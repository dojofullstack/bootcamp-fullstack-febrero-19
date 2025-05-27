


// control de errores JS try catch finally

const emailVericado = false;
const email = "henry@gmai.com";


// try  {
//     console.log("Intentando verificar el email...");
//     console.log(emailVericado);  
//     emailVericado.toUpperCase(); // Esto lanzará un error si emailVerificado es false
// } catch (error) {
//     console.log("Error al verificar el email:", error);
// }




// console.log("El email fue Enviaado.");
// console.log("El email no se pudo verificar."


// -----------------------------


const api_checkout_payment = "https://api.checkout.com/payments";

const paymentData = {
    amount: 1000,
    currency: "USD",
    source: "card_1234567890",
    description: "Pago de prueba",
    card: {
        number: "4242424242424242",
        exp_month: 12,
        exp_year: 2025,
        cvv: "00"
    }
};


try {
    console.log("Intentando realizar el pago...", api_checkout_payment);
    // Simulamos una llamada a la API
    throw "Error CVV"; // Simulamos un error para probar el manejo de errores
    // if (paymentData.card.cvv.length <= 3) {
    //     throw new Error("Número de tarjeta no proporcionado");
    // }
    
    // Aquí iría la lógica para enviar paymentData a la API
    console.log("Pago realizado con éxito:", paymentData);
} catch (error) {
    console.log("Error al realizar el pago:", error);
    alert("Error al realizar el pago: " + error);
} finally {
    console.log("Proceso de pago finalizado, ya sea con éxito o error.");
}




console.log("El proceso de pago ha finalizado.");