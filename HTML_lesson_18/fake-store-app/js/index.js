const productsList = document.getElementById("products-list");

// объявим асинхронную функцию
async function fetchProducts() {
  // await - это синтаксический сахар
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await res.json();
  console.log(products);

  products.forEach((product) => {
    const { title, description, images } = product;

    const productCard = document.createElement("li");
    productCard.classList.add("product-card");

    const titleEl = document.createElement("h2");
    const descriptionEl = document.createElement("p");
    const img = document.createElement("img");
    img.referrerPolicy = "no-referrer";

    titleEl.textContent = title;
    descriptionEl.textContent = description;
    img.src = images[0];

    productCard.append(titleEl, img, descriptionEl);
    productsList.appendChild(productCard);
  });
}

// не забудем вызвать функцию
fetchProducts();

// CRUD = Create Read Update Delete

async function fetchDeleteProduct(productId) {
  const res = fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    window.location.href = "/";
  }
}

const priceElement = document.createElement("p");
priceElement.textContent = price;

const editBtn = document.createElement("button");
editBtn.type = "button";
editBtn.textContent = "Edit";
editBtn.onclick = () => {};

form.innerHTML =
  '<input type="text" name="title" placeholder="title" /><input type="text" name="price" placeholder="price" /><button type="button">Save</button>';

editBtn.onclick = () => {
  const form = document.createElement("form");
  form.id = "edit-product-" + id;

  form.innerHTML =
    '<input type="text" name="title" placeholder="title" /><input type="text" name="price" placeholder="price" /><button type="button">Save</button>';

  productCard.appendChild(form);
};
