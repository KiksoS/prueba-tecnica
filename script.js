let leftbt = document.querySelector(".leftbt");
let rightbt = document.querySelector(".rightbt");
let leftbar = document.querySelector("#leftBar");
let rightbar = document.querySelector("#rightBar");
let cards = document.querySelectorAll(".card");
let ullist = document.querySelectorAll(".menu");
let wrapper = document.querySelector(".wrapper");



leftbt.addEventListener("click",function () {
    leftbar.classList.toggle("expand")

    if (leftbar.classList.contains("expand")) {
        leftbar.style.backgroundColor = '#343a40';
        ullist[0].style.visibility = 'visible';
        leftbar.classList.remove('close');
        wrapper.style.left = "21em";
    }else {
        wrapper.style.left = "19em";
        ullist[0].style.visibility = 'hidden';
        leftbar.classList.toggle("close")

    }
    
});

rightbt.addEventListener("click",function () {
    console.log("hola")
    rightbar.classList.toggle("expand")

    if (rightbar.classList.contains("expand")) {
        ullist[1].style.visibility = 'visible';
        rightbar.classList.remove('close')
        
        wrapper.style.left = "16.5em";
    }else {
        wrapper.style.left = "19em";
        ullist[1].style.visibility = 'hidden';
        rightbar.classList.toggle("close")
    }

    
});



cards.forEach(card => {
    card.addEventListener("click",function (){
        card.classList.toggle("active");
    })
});