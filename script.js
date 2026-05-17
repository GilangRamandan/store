function openPopup(){

    document
    .getElementById("popup")
    .classList.remove("hidden");

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

Produk: Netflix Premium
Paket: ${paket}
Email: ${email}`;

    window.location.href =
`https://wa.me/6287886783807?text=${encodeURIComponent(text)}`;

}
