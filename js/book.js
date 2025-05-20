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
}
