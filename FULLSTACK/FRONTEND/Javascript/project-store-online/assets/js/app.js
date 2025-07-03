console.log("Hola, mundo desde app.js");

const API_URL = "https://api.dojofullstack.com/api-demo/v1/product/";
const DB_PRODUCTS = {
  products: [],
};

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);

    if (response.status === 200) {
      console.log("Productos obtenidos:", response.data);
      DB_PRODUCTS.products = response.data.results;
      renderProducts();
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
            <p>
             ${product.description}
            </p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
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






const createProduct = async () => {
  const title = document.querySelector("input[type='text']").value;
  const price = document.querySelector("input[type='number']").value;
  const image = document.querySelector("input[type='url']").value;
  const description = document.querySelector("textarea").value;

//   if (!title || !price || !image || !description) {
//     console.error("Todos los campos son obligatorios");
//     return;
//   }

  try {
    const response = await axios.post(API_URL, {
      name: title,
      price: parseFloat(price),
      image_url: image,
      description: description,
    });

    if (response.status === 201) {
      console.log("Producto creado:", response.data);
      getProducts();
      my_modal_1.close();
    } else {
      console.error("Error al crear el producto:", response.statusText);
    }
  } catch (error) {
    console.error("Error al crear el producto:", error);
  }
}