// Proyekt

// fetch('https://api.escuelajs.co/api/v1/products')
//   .then(response => response.json())  
//   .then(users => {
//     renderUsers(users);  
//   })
//   .catch(error => console.log('Error fetching data:', error));

//   function renderUsers(users) {
//     const userList = document.getElementById('user-list');
  
//     userList.innerHTML = '';
  
//     users.forEach(user => {
//         const im = users[0].category.image
//       const userItem = document.createElement('li');
//       userItem.className = 'user-item';
//       userItem.innerHTML = `
//       <div>
//       <img src="${im}" alt="img">
//       </div><br>
//         <h3>${user.title}</h3><br>
//         <p> ${user.price}$</p>
//       `;
  
//       userList.appendChild(userItem);
//     });
//   }   ------------->Proyekt
  













// Uy ishi

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products-container');

  const fetchProducts = async () => {
      try {
          const response = await fetch('https://fakestoreapi.com/products?limit=10');
          const products = await response.json();
          renderProducts(products);
      } catch (error) {
          console.error('Error fetching products:', error);
      }
  };

  const renderProducts = (products) => {
      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';

          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.title;

          const productTitle = document.createElement('h3');
          productTitle.textContent = product.title;

          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;

          const productPrice = document.createElement('p');
          productPrice.className = 'price';
          productPrice.textContent = `$${product.price}`;

          productCard.appendChild(productImage);
          productCard.appendChild(productTitle);
          productCard.appendChild(productDescription);
          productCard.appendChild(productPrice);

          productsContainer.appendChild(productCard);
      });
  };

  fetchProducts();
});