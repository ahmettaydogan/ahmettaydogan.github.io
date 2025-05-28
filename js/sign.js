function toggleForm() {
  document.getElementById('loginForm').classList.toggle('hidden');
  document.getElementById('registerForm').classList.toggle('hidden');
}

// Kayıt işlemi
document.querySelector("#registerForm form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this[0].value.trim();
  const email = this[1].value.trim();
  const password = this[2].value.trim();

  if (!username || !email || !password) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === username)) {
    alert("Bu kullanıcı adı zaten var.");
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Kayıt başarılı! Giriş yapabilirsiniz.");
  toggleForm();
});

// Giriş işlemi
document.querySelector("#loginForm form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this[0].value.trim();
  const password = this[1].value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", username);
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı.");
  }
});
