const books = [
  {
    name: "Kavgam",
    author: "Adolf Hitler",
    price: "₺59,90",
    category: "Tarih",
    image: "img/kavgam.jpg",
    description: "Kavgam, Adolf Hitler'in otobiyografisi ve politik manifestosudur. Nazi ideolojisinin temelini oluşturan bu eser, Almanya'nın I. Dünya Savaşı sonrası yaşadığı çöküşü, antisemitik görüşleri ve otoriter yönetim hayalini detaylı biçimde sunar. Döneminin politik atmosferine ışık tutarken, aynı zamanda 20. yüzyılın en yıkıcı rejimlerinden birinin entelektüel arka planını anlamak için önemli bir kaynaktır."
  },
  {
    name: "Atomik Alışkanlıklar",
    author: "James Clear",
    price: "₺89,90",
    category: "Bilim",
    image: "img/atomik-aliskanliklar.jpg",
    description: "Atomik Alışkanlıklar, küçük ve istikrarlı değişimlerin nasıl kalıcı alışkanlıklara dönüştürülebileceğini gösteren bir kişisel gelişim kitabıdır. James Clear, bilimsel araştırmalardan ve kendi hayat deneyimlerinden yola çıkarak, başarıya ulaşmanın gizli formülünü alışkanlık sistemleriyle açıklar. Kitap, hedef odaklı değil, süreç odaklı olmanın önemine vurgu yapar."
  },
  {
    name: "Böyle Buyurdu Zerdüşt",
    author: "F. Nietzsche",
    price: "₺74,90",
    category: "Felsefe",
    image: "img/zerdust.jpg",
    description: "Böyle Buyurdu Zerdüşt, Nietzsche'nin en önemli felsefi eserlerinden biridir. Üstinsan kavramı, tanrının ölümü ve ebedi dönüş gibi kavramları anlatan kitap, şiirsel ve aforizmik bir anlatıma sahiptir. Kitabın baş karakteri Zerdüşt, toplumun değer yargılarına başkaldırır ve bireyin kendi değerlerini yaratması gerektiğini savunur."
  },
  {
    name: "1984",
    author: "George Orwell",
    price: "₺54,90",
    category: "Roman",
    image: "img/1984.jpg",
    description: "1984, George Orwell tarafından kaleme alınmış distopik bir romandır. Totaliter bir devletin birey üzerindeki baskılarını ve düşünce denetimini anlatır. Büyük Birader'in sürekli gözetimi altında yaşayan Winston Smith'in hikayesi, özgürlüğün, gerçekliğin ve bireyselliğin sorgulandığı bir dünyayı resmeder. Kitap, günümüz politikalarını anlamada hâlâ etkili bir referanstır."
  },
  {
    name: "Tutunamayanlar",
    author: "Oğuz Atay",
    price: "₺69,90",
    category: "Edebiyat",
    image: "img/tutunamayanlar.jpg",
    description: "Tutunamayanlar, Oğuz Atay'ın modern Türk edebiyatına damga vuran eseridir. Topluma uyum sağlayamayan bireylerin iç dünyasını ironik bir dille anlatır. Selim Işık ve Turgut Özben karakterleri üzerinden sorgulanan yaşam, aidiyet ve bireysellik, kitabın temel temalarını oluşturur. Yapıbozumcu anlatımıyla alışılmış roman yapısını yıkar."
  },
  {
    name: "Karamazov Kardeşler",
    author: "Fyodor Dostoyevski",
    price: "₺84,90",
    category: "Roman",
    image: "img/karamazov.jpg",
    description: "Karamazov Kardeşler, Dostoyevski'nin insan doğasının karanlık ve aydınlık yönlerini irdelediği başyapıtıdır. Aile içi çatışmalar, Tanrı inancı, ahlak ve özgür irade gibi felsefi temaları işleyen roman, üç kardeşin hayatları üzerinden derin psikolojik çözümlemeler sunar. Yazarın entelektüel derinliği bu romanda zirveye ulaşır."
  },
  {
    name: "Sefiller",
    author: "Victor Hugo",
    price: "₺64,90",
    category: "Roman",
    image: "img/sefiller.jpg",
    description: "Sefiller, Fransız yazar Victor Hugo'nun en bilinen eseridir. Jean Valjean karakteri üzerinden merhamet, adalet, insanlık onuru ve affetmenin gücü gibi evrensel temaları işler. Fransız Devrimi sonrası dönemde geçen roman, bireyin içsel dönüşümünü ve toplumsal adaletsizliklerle mücadelesini dramatik bir şekilde anlatır."
  },
  {
    name: "Tarihin İzinde",
    author: "İlber Ortaylı",
    price: "₺49,90",
    category: "Tarih",
    image: "img/tarihin-izinde.jpg",
    description: "Tarihin İzinde, Prof. Dr. İlber Ortaylı'nın tarihsel olayları yorumladığı popüler denemelerden oluşur. Osmanlı ve Cumhuriyet dönemlerini kıyaslayan analizlerle okuyucuya bilgi verirken, aynı zamanda tarih bilincinin önemini vurgular. Akıcı dili ve entelektüel bakışıyla geniş bir okur kitlesine hitap eder."
  },
  {
    name: "Nutuk",
    author: "M. Kemal Atatürk",
    price: "₺39,90",
    category: "Tarih",
    image: "img/nutuk.jpg",
    description: "Nutuk, Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk'ün, Kurtuluş Savaşı'ndan Cumhuriyet'in ilanına kadar geçen süreci belgelediği tarihi metindir. Nutuk, yalnızca politik bir konuşma değil, aynı zamanda bir milletin kaderini değiştiren liderlik öyküsünün detaylı anlatımıdır. Cumhuriyet tarihinin temel taşlarından biridir."
  },
  {
    name: "Küçük Prens",
    author: "Antoine de Saint-Exupéry",
    price: "₺29,90",
    category: "Çocuk",
    image: "img/kucuk-prens.jpg",
    description: "Küçük Prens, sade diliyle hem çocuklara hem yetişkinlere hitap eden evrensel bir masaldır. Küçük bir gezegenden dünyaya gelen prensin farklı karakterlerle yaptığı sohbetler, sevgi, dostluk, sorumluluk ve insan doğası üzerine derin mesajlar taşır. Anlamı katmanlıdır ve her yaşta farklı yorumlanabilir."
  },
  {
    name:"Kendime Düşünceler",
    author: "Marcus Aurelius",
    price:"₺34,75",
    category:"Felsefe",
    image:"img/kendime-dusunceler.jpg",
    description:"Sağlam bir eşitlik ve özgürlük inancına sahip olan Marcus Aurelius imparatorluğu boyunca doğayı bilip anlayarak yaşamaya çalışmış, her şeyin ortasına insanı koymuştur. Günlük olarak kaleme alınmış bir özdeyişler ve düşünceler derlemesi denebilecek Kendime Düşünceler eserinde kendinden önceki caesarları ve filozofları eleştirmekle kalmayıp, kendi kendini de sorguya çekerek bir vicdan muhasebesi de yapar. Sonraki kuşaklara, kilise düşünürlerine, Rönesans’a da temel olan Kendime Düşünceler, Stoa felsefesinin anlaşılması açısından günümüzde de çok değerli bir kaynaktır."
 },
  {
    name:"Mahalle Sineması",
    author: "Sevim Ak",
    price:"₺90",
    category:"Çocuk",
    image:"img/sevimak.jpg",
    description:"Sevim Ak, bu kitabındaki öyküleri, küçük bir kız çocuğunun ağzından anlatıyor. Eski sinemacı Artist Kenan'ın yardımıyla, evin odunluğunda bir sinema salonu hazırlıyor çocuklar. Kenan Amca da sinema salonu hazırlıyor çocuklar."
 },
  {

    name:"Engereğin Gözü",
    author: "Zülfü Livaneli",
    price:"₺210",
    category:"Roman",
    image:"img/livanelieg.jpg",
    description:"25. yıl baskısıyla yeniden okurlarıyla buluşan Engereğin Gözü, bir dönem romanı olmanın ötesinde, insan psikolojisinin derinliklerine; dün, bugün ve yarının saraylarına, en gizli sırları bile aydınlatacak gerçeklikte ışık tutan bir Zülfü Livaneli klasiği."
  },
  {
    name:"El Kızı",
    author: "Orhan Kemal",
    price:"₺308",
    category:"Edebiyat",
    image:"img/elkızı.jpg",
    description:" Orhan Kemal’in ev içi yaşamlara ilişkin yazdığı en yetkin kitaplardan biri olan El Kızı, toplumun aile içindeki yansıyışını da mükemmel biçimde ele alır. Orhan Kemal’in kitapları bir okurun hayatta w rastlayabileceği o çok nadir hazineler arasında yer alır. "
  },
  { 
    name:"Akan Nehir Gibi",
    author:"Paulo Coelho",
    price:"₺154",
    category:"Edebiyat",
    image:"img/akannehirgibi.jpg",
    description:"Dünyanın en sevilen ve en çok okunan yazarlarından Paulo Coelho’dan nefes kesici bir anlatı koleksiyonu."
  },
  
  {
    name:"Fatih Sultan Mehmed",
    author: "İlber Ortaylı",
    price:"₺205",
    category:"Tarih",
    image:"img/fsm.jpg",
    description:"İlber Ortaylı, uzun yıllardır üzerinde çalıştığı yeni biyografisinde Fâtih Sultan Mehmed’i yalnızca efsanevi bir hükümdar olarak değil, aynı zamanda bir çağın mimarı ve unutulmaz bir medeniyetin kurucusu olarak tanımlıyor. Tüm zamanların en önde gelen entelektüel mareşalini yeni bakış açıları ve özgün fikirlerle ele alan bu çalışma, Türk tarihçiliği için eşsiz bir başvuru kaynağı…"
 },
    { name:"Mutlu Olma Sanatı",
    author: "Arthur Schopenhauer",
    price:"₺65",
    category:"Felsefe",
    image:"img/mos.jpg",
    description:"Mutlu Olma Sanatı, iyimser dünya görüşüne karşı çıkan ve yaşadığımız dünyayı olası dünyaların en kötüsü sayan Schopenhauer’den umulmadık bir kılavuz. Adını felsefe tarihine kötümser olarak yazdıran filozofun bu küçük kitabı, mutluluğa ulaşma çabası olarak hayata dair pratik bir felsefeyi de olanaklı kılıyor."
     },
        { 
          name:"Yaşamla Buluşmak",
    author: "Jiddu Krishnamurti",
    price:"₺206",
    category:"Felsefe",
    image:"img/yasamlabulusmak.jpg",
    description:"Yaşamla Buluşmak gündelik yaşamın karmaşası içinde dahi içsel huzuru ve özgürlüğü bulmak isteyen herkes için bir kılavuz. Ne de olsa Krishnamurti sizi yalnızca okumaya değil, aynı zamanda kendi yaşamınızı değiştirmeye, her şeyi gerçeğin ve eylemin çerçevesinde sınamaya çağıran bir yazar. Yaşamla Buluşmak topluma karşın toplumda kalma ikileminde sıkışıp kalan herkes için bir umut ışığı."
     },
        {
     name:"Kanatsız Arı",
    author: "Ahmet Şerif İzgören",
    price:"₺90",
    category:"Çocuk",
    image:"img/kanatsizari.jpg",
    description:"Çalışkan arımız Ahmet Şerif İzgören, bu kitabında bir petek bala harikalar sığdırıyor. Kanatları olmayan minik bir arı, hayal gücünün uçsuz bucaksız ovalarında uçuyor, eksiklik sanılan şeylerin gerçek yüzünü fazlasıyla ceplerimize dolduruyor. Yeniliklere doğru kanat çırpan kovanı ve baldan tatlı arılarıyla Kanatsız Arı Mu, geceyi aydınlatan ateş böcekleri gibi ışıl ışıl…Hayatın renkli gökyüzünde süzülmek için kanatlara ihtiyacımız var mı?"
        },

    {
    name:"Düşünce Gücüyle Tedavi",
    author: "Louise L. Hay",
    price:"₺176",
    category:"Bilim",
    image:"img/dusuncegucu.jpg",
    description:"Kitap, küçücük bir sivilceden, kansere kadar birçok hastalığın nedenlerinin psikolojik olumsuzluklardan kaynaklandığını satır satır anlatıyor. Hangi hastalık için, hangi olumlu öneriyi düşüncelerinizin besini olarak kullanacağınızı da söylüyor."
   }  	
];


// ana sayfa render
function renderBooks(filter = "tumu") {
  const container = document.getElementById("bookGrid");
  if (!container) return;

  const list = filter === "tumu" ? books : books.filter(b => b.category === filter);
  container.innerHTML = "";
  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="book.html?book=${encodeURIComponent(book.name)}" style="text-decoration: none; color: inherit;">
        <img src="${book.image}" alt="${book.name}">
        <div class="card-content">
          <h3>${book.name}</h3>
          <p>${book.author}</p>
          <div class="card-footer">
            <span>${book.price}</span>
            <div class="icons">
              <button title="Sepete Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M7 4h-2l-1 2h-2v2h1l3.6 7.59-1.35 2.44
                           c-.16.29-.25.63-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45
                           c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
                           0-.55-.45-1-1-1h-14z"/>
                </svg>
              </button>
              <button title="Favorilere Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28
                           2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01
                           4.22 2.09C11.59 5.01 13.26 4 15 4
                           17.5 4 19.5 6 19.5 8.5c0 3.78-3.4 6.86-8.55
                           11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
  addCartEvent();
updateCartCount();

}


// kategori seçimi
function setActiveCategory(el, cat) {
  document.querySelectorAll(".kategori").forEach(k => k.classList.remove("active"));
  el.classList.add("active");
  renderBooks(cat);
}

// arama kutusu
document.addEventListener("DOMContentLoaded", () => {
  renderBooks();
  const search = document.getElementById("searchInput");
  if (search) {
    search.addEventListener("input", e => {
      const keyword = e.target.value.toLowerCase();
      const results = books.filter(book =>
        book.name.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
      );
      renderSearchResults(results);
    });
  }
});

// arama sonucu özel render
function renderSearchResults(list) {
  const container = document.getElementById("bookGrid");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <a href="book.html?book=${encodeURIComponent(book.name)}" style="text-decoration: none; color: inherit;">
        <img src="${book.image}" alt="${book.name}">
        <div class="card-content">
          <h3>${book.name}</h3>
          <p>${book.author}</p>
          <div class="card-footer">
            <span>${book.price}</span>
            <div class="icons">
              <button title="Sepete Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M7 4h-2l-1 2h-2v2h1l3.6 7.59-1.35 2.44
                           c-.16.29-.25.63-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45
                           c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
                           0-.55-.45-1-1-1h-14z"/>
                </svg>
              </button>
              <button title="Favorilere Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28
                           2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01
                           4.22 2.09C11.59 5.01 13.26 4 15 4
                           17.5 4 19.5 6 19.5 8.5c0 3.78-3.4 6.86-8.55
                           11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
  addCartEvent();
updateCartCount();

}

function handleSortChange() {
  const sortValue = document.getElementById("sortSelect").value;
  if (sortValue === "default") {
    // Varsayılan sıralama (kategoriye göre render)
    const activeCategory = document.querySelector(".kategori.active");
    const category = activeCategory ? activeCategory.getAttribute("onclick").match(/'([^']+)'/)[1] : "tumu";
    renderBooks(category);
  } else {
    sortBooksByPrice(sortValue);
  }
}

function sortBooksByPrice(order) {
  const activeCategory = document.querySelector(".kategori.active");
  const category = activeCategory ? activeCategory.getAttribute("onclick").match(/'([^']+)'/)[1] : "tumu";
  const list = category === "tumu" ? books : books.filter(b => b.category === category);

  const sorted = list.slice().sort((a, b) => {
    const priceA = parseFloat(a.price.replace("₺", "").replace(",", "."));
    const priceB = parseFloat(b.price.replace("₺", "").replace(",", "."));
    return order === "asc" ? priceA - priceB : priceB - priceA;
  });

  renderSortedBooks(sorted);
}

function renderSortedBooks(list) {
  const container = document.getElementById("bookGrid");
  container.innerHTML = "";
  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="book.html?book=${encodeURIComponent(book.name)}" style="text-decoration: none; color: inherit;">
        <img src="${book.image}" alt="${book.name}">
        <div class="card-content">
          <h3>${book.name}</h3>
          <p>${book.author}</p>
          <div class="card-footer">
            <span>${book.price}</span>
            <div class="icons">
              <button title="Sepete Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M7 4h-2l-1 2h-2v2h1l3.6 7.59-1.35 2.44
                           c-.16.29-.25.63-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45
                           c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
                           0-.55-.45-1-1-1h-14z"/>
                </svg>
              </button>
              <button title="Favorilere Ekle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#444">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28
                           2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01
                           4.22 2.09C11.59 5.01 13.26 4 15 4
                           17.5 4 19.5 6 19.5 8.5c0 3.78-3.4 6.86-8.55
                           11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
  addCartEvent();
updateCartCount();

}

// localStorage ile sepet verisini sakla
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = document.querySelectorAll(".cart-count");
  count.forEach(el => el.textContent = cart.length);
}

// Sepete Ekle / Çıkar butonları
function addCartEvent() {
  const buttons = document.querySelectorAll(".card .icons button[title='Sepete Ekle']");
  buttons.forEach((btn, index) => {
    const book = books[index];

    const cart = getUserCart();
    const isInCart = cart.some(item => item.name === book.name);
    if (isInCart) btn.querySelector("svg").style.fill = "#16a34a";

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!getCurrentUser()) {
        alert("Sepete ürün eklemek için giriş yapmalısınız.");
        return;
      }

      let updatedCart = getUserCart();
      const indexInCart = updatedCart.findIndex(item => item.name === book.name);

      if (indexInCart >= 0) {
        updatedCart.splice(indexInCart, 1);
        btn.querySelector("svg").style.fill = "#444";
      } else {
        updatedCart.push(book);
        btn.querySelector("svg").style.fill = "#16a34a";
      }

      saveUserCart(updatedCart);
    });
  });
}


function updateUserMenu() {
  const user = localStorage.getItem("currentUser");
  const nav = document.querySelector(".nav-right");

  if (!nav) return;

  if (user) {
    nav.innerHTML = `
      <span style="font-weight: bold;">👋 Merhaba, ${user}</span>
      <button class="auth-btn" onclick="logout()">Çıkış</button>
      <a href="cart.html">
        <button class="cart-btn" title="Sepet">
          <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="#333">
            <path d="M7 4h-2l-1 2h-2v2h1l3.6 7.59-1.35 2.44
              c-.16.29-.25.63-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45
              c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
              0-.55-.45-1-1-1h-14z" />
          </svg>
          <span class="cart-count">0</span>
        </button>
      </a>
    `;
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  renderBooks();
  updateCartCount();
  updateUserMenu(); // 👈 EKLE
});

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "sign.html"; // çıkışta giriş ekranına gönder
}

function updateUserMenu() {
  const user = localStorage.getItem("currentUser");
  const nav = document.querySelector(".nav-right");

  if (!nav) return;

  if (user) {
    nav.innerHTML = `
      <span style="font-weight: bold;">👋 Merhaba, ${user}</span>
      <button class="auth-btn" onclick="logout()">Çıkış</button>
      <a href="cart.html">
        <button class="cart-btn" title="Sepet">
          <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="#333">
            <path d="M7 4h-2l-1 2h-2v2h1l3.6 7.59-1.35 2.44
              c-.16.29-.25.63-.25.97 0 1.1.9 2 2 2h12v-2h-12l1.1-2h7.45
              c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
              0-.55-.45-1-1-1h-14z" />
          </svg>
          <span class="cart-count">0</span>
        </button>
      </a>
    `;
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "sign.html"; // veya index.html
}

document.addEventListener("DOMContentLoaded", () => {
  updateUserMenu();
});

function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

function getUserCart() {
  const user = getCurrentUser();
  if (!user) return [];
  const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
  return carts[user] || [];
}

function saveUserCart(cart) {
  const user = getCurrentUser();
  if (!user) return;
  const carts = JSON.parse(localStorage.getItem("userCarts")) || {};
  carts[user] = cart;
  localStorage.setItem("userCarts", JSON.stringify(carts));
  updateCartCount();
}

function updateCartCount() {
  const cart = getUserCart();
  const count = document.querySelectorAll(".cart-count");
  count.forEach(el => el.textContent = cart.length);
}
