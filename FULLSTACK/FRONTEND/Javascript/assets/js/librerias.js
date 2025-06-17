
console.log("librerias.js cargado correctamente");

// paquetes nativos de JavaScript
// console.log("Paquetes nativos de JavaScript:");
console.log("Math:", Math);
console.log("Date:", Date);
console.log("JSON:", JSON);
console.log("RegExp:", RegExp);
console.log("URL:", URL);
console.log("Fecht:", fetch);

// Libreria para generar peticiones HTTP
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then((result) => {
//     result.products.forEach(element => {
//         console.log(`Producto: ${element.title}, Precio: ${element.price}`);
//     })
// })
// .catch((e) => {
//     console.log(e);
// });



// conversiones JSON
// jsonparse y jsonstringify

// console.log(JSON.parse('{"name": "John", "age": 30, "city": "New York"}'));
// console.log(JSON.stringify({ name: "John", age: 30, city: "New York", isCasado: false }));


// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);



// Libreria DE TERCEROS
// LIBRERIA Axios



axios.get("https://dummyjson.com/products").then( (respuesta) => {
  console.log("Respuesta de la API:", respuesta.data.products);
}).catch( (error) => {
  console.error("Error al obtener los productos:", error);
})

/// crear un producto con axios

const payload = {
  title: "BMW Pencil",
  description: "A high-quality pencil for writing and drawing.",
  price: 1.99,
};

axios.post("https://dummyjson.com/products/add", payload).then((respuesta) => {
  console.log("Producto creado:", respuesta.data);
}
).catch((error) => {
  console.error("Error al crear el producto:", error);
});



/// login con axios
const loginPayload = {
  username: 'emilys',
  password: 'emilyspass',
};

axios.post("https://dummyjson.com/auth/login", loginPayload).then((respuesta) => {
  console.log("Login exitoso:", respuesta.data);
}).catch((error) => {
  console.error("Error al iniciar sesión:", error);
});