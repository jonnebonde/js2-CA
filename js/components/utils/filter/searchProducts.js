import { renderProducts } from "../../ui/renderProducts.js";

export function searchProducts(products) {
  const searchByPrice = document.querySelector("#price");

  function filterProducts(event) {
    const searchValue = event.target.value.trim();

    const filteredProducts = products.filter(function (product) {
      if (searchValue >= product.price) {
        return true;
      }
    });

    if (searchValue) {
      renderProducts(filteredProducts);
    } else {
      renderProducts(products);
    }
  }

  searchByPrice.addEventListener("keyup", function (e) {
    filterProducts(e);
  });
}
