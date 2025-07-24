console.log("Hola, mundo desde app.js");

const API_URL = "https://api.dojofullstack.com/api-demo/v1/product/";

const API_AUTH_REGISTER = "https://api.dojofullstack.com/api/auth/users/";
const API_AUTH_TOKEN = "https://api.dojofullstack.com/api/auth/jwt/create/";

const DB_PRODUCTS = {
  products: [],
  loadingProduct: false,
  loadingComment: false,
  loadingPost: false,
};


const getProducts = async () => {
  
  document.querySelector("#catalogo-product").classList.add("skeleton");

  try {
    const response = await axios.get(API_URL);

    if (response.status === 200) {
      console.log("Productos obtenidos:", response.data);
      DB_PRODUCTS.products = response.data.results;
      renderProducts();

      document.querySelector("#catalogo-product").classList.remove("skeleton");
    } else {
        console.error("Error al obtener los productos:", response.statusText);
    }
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }

  // axios.get(API_URL).then((response) => {
  //     console.log("Productos obtenidos:", response.data);
  //     DB_PRODUCTS.products = response.data.results;
  // }).catch((error) => {
  //     console.error("Error al obtener los productos:", error);
  // });
};



const renderProducts = () => {
    const catalogoCards = DB_PRODUCTS.products.map((product, index) => {
    console.log("Producto:", product);

    const productCard = `
      <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="${product.image_url}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              ${product.name}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <h3 class="text-lg text-primary font-bold" >$${parseFloat(product.price).toFixed(1) }</h3>
            <p>
             ${product.description}
            </p>
            <div class="card-actions justify-between">
              
              <button class="btn btn-error" onclick="deleteProduct(${product.id})">
              <i class="bi bi-trash3-fill text-2xl"></i>
              </button>
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>

              <button class="btn btn-info" onclick="openModalUpdate(${product.id})">
                  <i class="bi bi-pencil-square text-2xl"></i>
              </button>

            </div>
          </div>
        </div>
    `;
    return productCard;
  });

  console.log("Catalogo de productos:", catalogoCards);

  const catalgoHTMLString = catalogoCards.join(" ");

  document.querySelector("#catalogo-product").innerHTML = catalgoHTMLString;

};






const createProduct = () => {
  // console.log("Crear producto");
  DB_PRODUCTS.loadingProduct = true;
  document.querySelector("#loading-product").classList.remove("hidden");

  const title = document.querySelector("#title-product").value;
  const price = document.querySelector("#price-product").value;
  const image = document.querySelector("#image-product").value;
  const description = document.querySelector("#description-product").value;

  // if (!title || !price || !image || !description) {
  //   alert("Todos los campos son obligatorios");
  //   return;
  // }

   axios.post(API_URL, {
      name: title,
      price: parseFloat(price),
      image_url: image,
      description: description,
    }).then((response) => {
          console.log("Producto creado:", response.data);
          getProducts();
          my_modal_1.close();
          document.querySelector("#loading-product").classList.add("hidden");
    }).catch((error) => {
      console.error("Error al crear el producto:", error);
    });


  // try {
  //   const respponse = await axios.post(API_URL, {
  //     name: title,
  //     price: parseFloat(price),
  //     image_url: image,
  //     description: description,
  //   });

  //   if (response.status === 201) {
  //     console.log("Producto creado:", response.data);
  //     getProducts();
  //     my_modal_1.close();
  //   } else {
  //     console.error("Error al crear el producto:", response.statusText);
  //   }
  // } catch (error) {
  //   console.error("Error al crear el producto:", error);
  // }

}




const deleteProduct = (id) => {
  
  document.querySelector("#catalogo-product").classList.add("skeleton");

  axios.delete(`https://api.dojofullstack.com/api-demo/v1/product/${id}/`).then((response) => {
    console.log("Producto eliminado:", response.data);
    getProducts();

    document.querySelector("#catalogo-product").classList.remove("skeleton");
  }).catch((error) => {
    console.error("Error al eliminar el producto:", error);
  });

}



const getProductDetail = (id) => {
  console.log("Obtener detalle del producto:", id);

  // llamar api get para obtener el producto por id
  axios.get(`https://api.dojofullstack.com/api-demo/v1/product/${id}/`).then((response) => {
    console.log("Detalle del producto:", response.data);
  
    // mostrar el detalle del producto en un modal o en la consola

    const product = response.data;

    document.querySelector("#title-product-update").value = product.name;
    document.querySelector("#price-product-update").value = product.price;
    document.querySelector("#image-product-update").value = product.image_url;
    document.querySelector("#description-product-update").value = product.description;



  }).catch((error) => {
    console.error("Error al obtener el detalle del producto:", error);
  });
};




const openModalUpdate = (id) => {
  console.log("Actualizar producto:", id);

  document.querySelector("#id-product").value = id;

  my_modal_update.showModal();

  // llamar api get para obtener el producto por id
  getProductDetail(id);

};




const updateProduct = () => {

  const productID = document.querySelector("#id-product").value;
  const title = document.querySelector("#title-product-update").value;
  const price = document.querySelector("#price-product-update").value;
  const image = document.querySelector("#image-product-update").value;
  const description = document.querySelector("#description-product-update").value;

  const payload = {
    name: title,
    price: parseFloat(price),
    image_url: image,
    description: description,
  };

  axios.put(`https://api.dojofullstack.com/api-demo/v1/product/${productID}/`, payload).then((response) => {
    console.log("Producto actualizado:", response.data);
    getProducts();
    my_modal_update.close();
  }).catch((error) => {
    console.error("Error al actualizar el producto:", error);
  });


}



const registerUser = () => {

    // RECOPILAR LOS DATOS DEL FORMULARIO
    const name = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;  
    const passwordConfirm = document.querySelector("#password-confirm").value;

    if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const payload = {
        username: name,
        email: email,
        password: password,
        firtsName: name,
    };


    // ENVIAR LOS DATOS A LA API
    axios.post(API_AUTH_REGISTER, payload).then((response) => {
        console.log("Usuario registrado:", response.data);
        alert("Usuario registrado correctamente");
        window.location.href = "/Javascript/project-store-online/auth/login.html";
    }).catch((error) => {
        console.error("Error al registrar el usuario:", error);
        alert("Error al registrar el usuario");
    });

}



const loginUser = () => {

    // RECOPILAR LOS DATOS DEL FORMULARIO
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const payload = {
        username: email,
        password: password,
    };

    // ENVIAR LOS DATOS A LA API
    axios.post(API_AUTH_TOKEN, payload).then((response) => {
        console.log("Usuario logueado:", response.data);
        
        // GUARDAR EL TOKEN EN LOCAL STORAGE

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        document.cookie = `access=${response.data.access}; path=/; max-age=3600`;


        alert("Usuario logueado correctamente");
        window.location.href = "/Javascript/project-store-online/admin.html";
    }).catch((error) => {
        console.error("Error al loguear el usuario:", error);
        alert("Error al loguear el usuario");
    });

};




const laboratioLocalStorage = () => {

    const cartStore = {
        products: [
            {
                id: 1,
                name: "Producto 1",
                price: 10.99,
                quantity: 2,
            },
            {
                id: 2,
                name: "Producto 2",
                price: 5.49,
                quantity: 1,
            },
        ],
        total: 3,
        count: 0,
    }


    console.log(localStorage);

    localStorage.setItem("email", "henry@gmail.com");
    localStorage.setItem("theme", "light");
    localStorage.setItem("cartStore", JSON.stringify(cartStore) );
    
    const email = localStorage.getItem("email");
    console.log(email);

    localStorage.removeItem("theme");

    localStorage.clear();

    localStorage.setItem("email", "carlos@gmail.com");

}



// laboratioLocalStorage();

const laboratioCookies = () => {

    console.log(document.cookie);

    const fechaActual = new Date();
    const fechaNow = new Date();

    const fechaExpiracion = fechaActual.getTime() + 24*60*60*1000;

    fechaActual.setTime(fechaExpiracion);


    document.cookie = "pais=mexico; path=/; expires=".concat(fechaActual.toUTCString());


    document.cookie = "pais=peru; path=/; expires=".concat(fechaActual.toUTCString());


    document.cookie = "pais=; path=/; expires=".concat(fechaNow.toUTCString());


}



// laboratioCookies();


const loadProfile = () => {
    const accessToken = localStorage.getItem("access");

    if (!accessToken) {
        console.error("No hay token de acceso disponible");
        window.location.href = "/Javascript/project-store-online/auth/login.html";
        return;
    }


    axios.get("https://api.dojofullstack.com/api/auth/users/me/", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }).then((response) => {

        Toastify({
          text: "Perfil cargado correctamente",
          duration: 3000,
          destination: "#",
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();

        console.log("Perfil del usuario:", response.data);
        document.querySelector("#username").innerHTML = response.data.username;
        document.querySelector("#profile-image").src = `https://avatar.iran.liara.run/username?username=${response.data.username}`;

    }).catch((error) => {
        console.error("Error al obtener el perfil del usuario:", error);
        window.location.href = "/Javascript/project-store-online/auth/login.html";


    });
}