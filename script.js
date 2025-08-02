const products = [
  // Face Care
  { id: 1, name: "HydraFace Cleanser", price: 599, image: "/images/hydraCleanser.jpg", category: "face" },
  { id: 2, name: "Moisture Boost Cream", price: 699, image: "/images/moistureboostcream.jpg", category: "face" },
  { id: 3, name: "Brightening Peel Mask", price: 699, image: "/images/brightpeelmask.jpg", category: "face" },
  { id: 4, name: "Under Eye Repair", price: 599, image: "/images/underEyeRepair.jpg", category: "face" },

  // Hair Therapy
  { id: 5, name: "Hair Strength Serum", price: 799, image: "/images/hairStrengthSerum.jpg", category: "hair" },
  { id: 6, name: "Scalp Detox Oil", price: 499, image: "/images/scalpDetoxOil.png", category: "hair" },
  { id: 7, name: "Anti-Dandruff Shampoo", price: 399, image: "/images/shampoo2.jpg", category: "hair" },
  { id: 8, name: "Keratin Repair Mask", price: 899, image: "/images/KeratinRepairMask.jpg", category: "hair" },

  // Body Wellness
  { id: 9, name: "Body Butter Smooth", price: 649, image: "/images/bodyButterSmooth.png", category: "body" },
  { id: 10, name: "Foot Relief Cream", price: 399, image: "/images/FootReliefCream.jpg", category: "body" },
  { id: 11, name: "Soothing Aloe Lotion", price: 549, image: "/images/aleoLotion.jpg", category: "body" },
  { id: 12, name: "Vitamin E Body Scrub", price: 749, image: "/images/VitaminEBodyScrub.jpg", category: "body" },

  // Combo Offers
  { id: 13, name: "Face & Hair Combo", price: 1299, image: "/images/combo1.jpg", category: "combo" },
  { id: 14, name: "Hair & Body Combo", price: 1399, image: "/images/combo2.jpg", category: "combo" }
];

let cart = [];

function renderProducts() {
  const face = document.getElementById("facecare");
  const hair = document.getElementById("haircare");
  const body = document.getElementById("bodycare");
  const combos = document.getElementById("combos");

  face.innerHTML = "";
  hair.innerHTML = "";
  body.innerHTML = "";
  combos.innerHTML = "";

  products.forEach(p => {
    const card = `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    if (p.category === "face") face.innerHTML += card;
    if (p.category === "hair") hair.innerHTML += card;
    if (p.category === "body") body.innerHTML += card;
    if (p.category === "combo") combos.innerHTML += card;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach((item, index) => {
    sum += item.price;
    list.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
  });
  total.textContent = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function scrollToCart() {
  document.getElementById("cart-section").scrollIntoView({ behavior: "smooth" });
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

renderProducts();
