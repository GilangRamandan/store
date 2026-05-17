// script.js

document.querySelectorAll('.package').forEach(pkg=>{

pkg.addEventListener('click',()=>{

let parent = pkg.parentElement;

parent.querySelectorAll('.package').forEach(el=>{
el.classList.remove('active');
});

pkg.classList.add('active');

});

});

document.querySelectorAll('.order-btn').forEach(btn=>{

btn.addEventListener('click',()=>{

let card = btn.parentElement;

let product =
card.querySelector('h3').innerText;

let paket =
card.querySelector('.package.active').innerText;

let text =
`Halo Gilz Store,%0ASaya ingin order:%0A%0AProduk: ${product}%0APaket: ${paket}`;

window.location.href =
`https://wa.me/6287886783807?text=${text}`;

});

});
