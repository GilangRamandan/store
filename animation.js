const cards =
document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position =
card.getBoundingClientRect().top;

let screen =
window.innerHeight / 1.2;

if(position < screen){

card.classList.add("show");

}

});

});