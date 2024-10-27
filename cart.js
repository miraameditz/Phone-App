console.log("hello cart");

const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let output = document.querySelector("#output");

convert.map((item, index) => {
  output.innerHTML += `
  <div class="cart-box">
    <div class="cart-box-image">
      <img src="${item.image}" />
    </div>
    <div class="cart-box-content">
      <h1>${item.brand}  ${item.model}</h1>
      <p>Storage: ${item.ram} / ${item.rom}</p>
      <p>${item.camera}</p>
      <div class="quantity">
        <button onclick="minus(${index})">-</button>
        <p id="qun-num-${index}">0</p>
        <button onclick="plus(${index})">+</button>
      </div>
      <h4>Price $${item.price}</h4>
      <button class="buy-now" onclick="buynow()">Buy Now</button>
    </div>
  </div>
  `;
});

function plus(index) {
  let number = document.querySelector(`#qun-num-${index}`);
  number.innerHTML++;
}

function minus(index) {
  let number = document.querySelector(`#qun-num-${index}`);
  if (number.innerHTML > '0') {
    number.innerHTML--;
  }
}

function buynow() {
  Swal.fire("Your Order Has Been  Placed");

}