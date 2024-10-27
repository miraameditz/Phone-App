const phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
    image: "./samsung.avif",
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
    image: "./iphone13.png",
  },
  {
    brand: "OnePlus",
    model: "9",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
    image: "./oneplus9.png",
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
    image: "./pixel-6.png",
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
    image: "./xiaomi.png",
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
    image: "./sony.avif",
  },
  {
    brand: "Oppo",
    model: "Find X3 Pro",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
    image: "./oppo.png",
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
    image: "./vivo.png",
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
    image: "./moto.png",
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
    image: "./2-c89f67769e.png",
  },
  {
    brand: "Asus",
    model: "ROG Phone 5",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image: "./oppo.png",
  },
  {
    brand: "HTC",
    model: "Desire 21 Pro",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
    image: "./oneplus9.png",
  },
  {
    brand: "Huawei",
    model: "P40 Pro",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
    image: "./oppo.png",
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
    image: "./vivo.png",
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
    image: "./iphone13.png",
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
    image: "./vivo.png",
  },
  {
    brand: "Lenovo",
    model: "Legion Phone Duel",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image: "./xiaomi.png",
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
    image: "./samsung.avif",
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
    image: "./sony.avif",
  },
];

let cartItems;
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
  cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}

console.log("cartitems===>", cartItems);

const div = document.querySelector("#container");

phones.map((item, index) => {
  div.innerHTML += `
    <div class="card">
    <div class="card-image">
    <img src="${item.image}" />
    </div>
    <div class="content">
    <h2>${item.brand} ${item.model}</h2>
    <p>Storage: ${item.ram} / ${item.rom}</p>
    <p>price $${item.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
    </div>
    `;
});

function addToCart(index) {
  const checkIndex = cartItems.indexOf(phones[index]);
  if (checkIndex === -1) {
    phones[index].quantity = 1;
    cartItems.push(phones[index]);
  } else {
    cartItems[checkIndex].quantity += 1;
  }
  console.log(cartItems);
  Swal.fire({
    title: "Good job!",
    text: "Item added to cart successfully!",
    icon: "success",
  });
}

function checkout() {
  console.log("checkout");
  const convertArrIntoStr = JSON.stringify(cartItems);
  localStorage.setItem("cart", convertArrIntoStr);
  window.location = "./cart.html";
}
