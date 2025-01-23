document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const productList = document.getElementById("product-list");
    const emptyRow = document.getElementById("empty-row");
  
    let products = [];
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const sku = document.getElementById("sku").value;
      const quantity = document.getElementById("quantity").value;
      const price = document.getElementById("price").value;
  
      if (name && sku && quantity && price) {
        const product = { name, sku, quantity: Number(quantity), price: Number(price) };
        products.push(product);
        renderProducts();
        form.reset();
      }
    });
  
    function renderProducts() {
      productList.innerHTML = "";
  
      products.forEach((product, index) => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td>${product.sku}</td>
          <td>${product.quantity}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
          </td>
        `;
  
        productList.appendChild(row);
      });
  
      emptyRow.style.display = products.length === 0 ? "" : "none";
    }
  
    window.editProduct = (index) => {
      const product = products[index];
      document.getElementById("name").value = product.name;
      document.getElementById("sku").value = product.sku;
      document.getElementById("quantity").value = product.quantity;
      document.getElementById("price").value = product.price;
  
      products.splice(index, 1);
      renderProducts();
    };
  
    window.deleteProduct = (index) => {
      products.splice(index, 1);
      renderProducts();
    };
  });
  