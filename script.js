let leftbt = document.querySelector(".leftbt");
let rightbt = document.querySelector(".rightbt");
let leftbar = document.querySelector("#leftBar");
let rightbar = document.querySelector("#rightBar");
let cards = document.querySelectorAll(".card");
let ullist = document.querySelectorAll(".menu")



rightbt.addEventListener("click",function () {
    console.log("hola")
    rightbar.classList.toggle("expand")

    if (rightbar.classList.contains("expand")) {
        ullist[1].style.visibility = 'visible';
       
    }else {
        ullist[1].style.visibility = 'hidden';

    }

    
});

leftbt.addEventListener("click",function () {
    leftbar.classList.toggle("expand")

    if (leftbar.classList.contains("expand")) {
        leftbar.style.backgroundColor = '#343a40';
        ullist[0].style.visibility = 'visible';
        
       
    }else {
        ullist[0].style.visibility = 'hidden';

    }
    
});



cards.forEach(card => {
    card.addEventListener("click",function (){
        card.classList.toggle("active");
    })
});