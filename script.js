let searchForm = document.querySelector(' .search-form');

document.querySelector('#search-btn').onclick = () =>{
  const searchBox = document.getElementById("search-box");
const allProducts = document.querySelectorAll(".products .swiper-slide.box");
const notFoundMsg = document.getElementById("not-found-msg");

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  let matchFound = false;

  allProducts.forEach(product => {
    const productName = product.querySelector("h3").innerText.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = "block";
      matchFound = true;
    } else {
      product.style.display = "none";
    }
  });

  // If no product is matched
  if (!matchFound) {
    notFoundMsg.style.display = "block";
  } else {
    notFoundMsg.style.display = "none";
  }
});

  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}








const cartBtn = document.getElementById("cart-btn");
const cartBox = document.querySelector(".shopping-cart");
const cartCount = document.getElementById("cart-count");
const totalBox = cartBox.querySelector(".total");
let cartItems = [];

// Sample function for each "add to cart" button
document.querySelectorAll(".products .btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const box = btn.closest(".box");
    const title = box.querySelector("h3").innerText;
    const priceText = box.querySelector(".price").innerText;
    const price = parseInt(priceText.match(/\d+/)[0]);
    const imgSrc = box.querySelector("img").getAttribute("src");

    // Check if already in cart
    const existing = cartItems.find(item => item.title === title);
    if (existing) {
      existing.qty++;
    } else {
      cartItems.push({ title, price, imgSrc, qty: 1 });
    }

    updateCart();
  });
});

// Remove item handler
cartBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const itemBox = e.target.closest(".box");
    const title = itemBox.querySelector("h3").innerText;
    cartItems = cartItems.filter(item => item.title !== title);
    updateCart();
  }
});

// Show/hide cart
cartBtn.addEventListener("click", () => {
  cartBox.classList.toggle("active");
});

// Update cart UI
function updateCart() {
  const container = cartBox.querySelectorAll(".box");
  container.forEach(c => c.remove());

  let total = 0;
  let count = 0;

  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
      <i class="fas fa-trash"></i>
      <img src="${item.imgSrc}" alt="">
      <div class="content">
        <h3>${item.title}</h3>
        <span class="price">$${item.price * item.qty}/-</span>
        <span class="quantity">qty : ${item.qty}</span>
      </div>
    `;
    cartBox.insertBefore(div, totalBox);
    total += item.price * item.qty;
    count += item.qty;
  });

  totalBox.innerText = `total : $${total}/-`;
  cartCount.innerText = count;

  
}



let loginIcon = document.querySelector('#login-btn');
let formWrapper = document.getElementById('form-wrapper');
let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');

// USER icon click opens login
loginIcon.onclick = () => {
  formWrapper.style.display = 'block';
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
};

// CREATE account
document.getElementById("create-link").onclick = function (e) {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
};

// LOGIN link
document.getElementById("login-link").onclick = function (e) {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
};

// FORGOT password alert
document.getElementById("forgot-link").onclick = function (e) {
  e.preventDefault();
  alert("Password reset link sent to your email!");
};
function handleSignup(event) {
  event.preventDefault(); // Prevent form submission

  // You can add form validation here if needed

  // Simulate successful signup and redirect to another page
  window.location.href = "welcome.html";  // ← Change this to your actual page
  return false;
}




//typing effect
 const typedText = document.querySelector('h3 span');
  const words = ['Fruits', 'Vegetables', 'Chocolates','FreshJuices'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      charIndex--;
      typedText.textContent = currentWord.substring(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, 50);
      }
    } else {
      charIndex++;
      typedText.textContent = currentWord.substring(0, charIndex);
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    }
  }

  if (typedText) type();

    var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnIntraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,

        },
        1020: {
          slidesPerView: 3,
        
        },
      },
    });

    
    var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:7500,
        disableOnIntraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,

        },
        1020: {
          slidesPerView: 3,
        
        },
      },
    });