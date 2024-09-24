let leftbt = document.querySelector(".leftbt");
let rightbt = document.querySelector(".rightbt");
let leftbar = document.querySelector("#leftBar");
let rightbar = document.querySelector("#rightBar");
let cards = document.querySelectorAll(".card");



rightbt.addEventListener("click",function () {
    console.log("hola")
    rightbar.classList.toggle("expand")
    
});

leftbt.addEventListener("click",function () {
    leftbar.classList.toggle("expand")
    
});



cards.forEach(card => {
    card.addEventListener("click",function (){
        card.classList.toggle("active");
    })
});