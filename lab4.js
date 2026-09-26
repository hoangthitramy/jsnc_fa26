
function loadProducts() {

  axios.get("http://localhost:3000/products").then((res) => {

    const html = res.data
      .map((product, index) => {
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        `;
      })
      .join("");

    document.getElementById("product-list").innerHTML = html;

  });

}

loadProducts();