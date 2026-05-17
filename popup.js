let currentProduct = "";

function openPopup(product){

currentProduct = product;

document
.getElementById("popup")
.classList.remove("hidden");

document
.getElementById("popup-title")
.innerText = product;

}

function closePopup(){

document
.getElementById("popup")
.classList.add("hidden");

}

function checkout(){

let paket =
document.querySelector(
'input[name="paket"]:checked'
).value;

let email =
document.querySelector(
'.email-input'
).value;

let text =
`Halo Gilz Store

Saya ingin order:

Produk: ${currentProduct}
Paket: ${paket}
Email: ${email}`;

window.location.href =
`https://wa.me/6287886783807?text=${encodeURIComponent(text)}`;

}