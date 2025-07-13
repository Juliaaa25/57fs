const productsList = document.getElementById("products-list");

// GET запрос на сервер
fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(products);
    products.forEach((product) => {
      const productItem = document.sreateElement("li");
      const h3 = document.createElement("h3");
      productItem.appendChild(h3);
      productsList.appendChild(productItem);
      h3.textContent = product.title;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = `${product.price}`;

      productItem.appendChild(priceSpan);

      images.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.width = "200";
        img.referrerPolicy = "no-referrer";
        img.crossOrigin = "anonymous";
        productItem.appendChild(img);
      });
    });
  });
