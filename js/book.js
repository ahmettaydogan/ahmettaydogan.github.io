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

}
