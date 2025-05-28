const params = new URLSearchParams(window.location.search);
const bookName = params.get("book");
const book = books.find(b => b.name === bookName);
const details = document.getElementById("bookDetails");

if (!book) {
  details.innerHTML = "<p>Kitap bulunamadı.</p>";
} else {
  details.innerHTML = `
        <img class="book-cover" src="${book.image}" alt="${book.name}">
        <div class="book-info">
          <h1>${book.name}</h1>
          <p><strong>Yazar:</strong> ${book.author}</p>
          <p><strong>Fiyat:</strong> ${book.price}</p>
          <p><strong>Kategori:</strong> ${book.category}</p>
          <div class="book-description">
            ${book.description}
          </div>
          <div class="book-actions">
            <button class="add-cart">Sepete Ekle</button>
            <button class="buy-now">Satın Al</button>
          </div>
        </div>
      `;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
const addBtn = document.querySelector(".add-cart");

const isInCart = cart.some(item => item.name === book.name);
if (isInCart) addBtn.textContent = "Sepetten Çıkar";

addBtn.addEventListener("click", () => {
  const index = cart.findIndex(item => item.name === book.name);
  if (index >= 0) {
    cart.splice(index, 1);
    addBtn.textContent = "Sepete Ekle";
  } else {
    cart.push(book);
    addBtn.textContent = "Sepetten Çıkar";
  }

  localStorage.setItem("cart", JSON.stringify(cart));
});
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const bookName = params.get("book");

  const book = books.find(b => b.name === bookName);
  const details = document.getElementById("bookDetails");

  if (!book) {
    details.innerHTML = "<p>Kitap bulunamadı.</p>";
    return;
  }

  details.innerHTML = `
    <img class="book-cover" src="${book.image}" alt="${book.name}">
    <div class="book-info">
      <h1>${book.name}</h1>
      <p><strong>Yazar:</strong> ${book.author}</p>
      <p><strong>Fiyat:</strong> ${book.price}</p>
      <p><strong>Kategori:</strong> ${book.category}</p>
      <div class="book-description">${book.description}</div>
      <div class="book-actions">
        <button id="addToCart" class="add-cart">Sepete Ekle</button>
        <button class="buy-now">Satın Al</button>
      </div>
    </div>
  `;

  // Sepet işlemleri:
  const user = localStorage.getItem("currentUser");
  const addBtn = document.getElementById("addToCart");

  function getUserCart() {
    const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
    return user ? (carts[user] || []) : [];
  }

  function saveUserCart(cart) {
    if (!user) return;
    const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
    carts[user] = cart;
    localStorage.setItem("userCarts", JSON.stringify(carts));
  }

  if (!user) {
    addBtn.disabled = true;
    addBtn.textContent = "Giriş yapmalısınız";
    addBtn.style.backgroundColor = "#aaa";
    return;
  }

  let cart = getUserCart();
  const isInCart = cart.some(item => item.name === book.name);
  if (isInCart) {
    addBtn.textContent = "Sepetten Çıkar";
  }

  addBtn.addEventListener("click", () => {
    cart = getUserCart();
    const index = cart.findIndex(item => item.name === book.name);
    if (index >= 0) {
      cart.splice(index, 1);
      addBtn.textContent = "Sepete Ekle";
    } else {
      cart.push(book);
      addBtn.textContent = "Sepetten Çıkar";
    }
    saveUserCart(cart);
  });
});

}
