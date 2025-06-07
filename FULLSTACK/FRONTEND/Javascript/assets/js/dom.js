

// trabajar con el DOM

const btnComprar =  document.getElementById("btnComprar");

btnComprar.style.backgroundColor = "green";
btnComprar.style.color = "white";
btnComprar.style.padding = "10px 20px";
btnComprar.style.border = "none";
btnComprar.style.borderRadius = "5px";
btnComprar.style.cursor = "pointer";
btnComprar.style.fontSize = "16px";
btnComprar.style.fontWeight = "bold";
btnComprar.style.transition = "background-color 0.3s ease";

btnComprar.innerHTML = `Agregar al carrito <span class="icon">🛒</span>`;


function cambiarColorBoton() {
    btnComprar.style.backgroundColor = "blue";
}


btnComprar.addEventListener("click", cambiarColorBoton);



const btnComprar2 = document.querySelector("#btnComprar2");

const btnComprar3 = document.querySelector(".btn.btn-secondary");


btnComprar3.style.backgroundColor = "red";
btnComprar3.style.color = "white";
btnComprar3.style.padding = "10px 20px";
btnComprar3.style.border = "none";
btnComprar3.style.borderRadius = "5px";
btnComprar3.style.cursor = "pointer";
btnComprar3.style.fontSize = "16px";
btnComprar3.style.fontWeight = "bold";
btnComprar3.style.transition = "background-color 0.3s ease";
btnComprar3.innerHTML = `Comprar ahora <span class="icon">🛍️</span>`;


const btnComprar5 = document.querySelectorAll(".btn.btn-secondary");

console.log(btnComprar5);