let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

hamburger.onclick = function(){
    nav.classList.toggle("open-nav");

    if(nav.classList.contains("open-nav")){
        hamburger.src = "./images/icon-close.svg";
    }
    else{
        hamburger.src = "./images/icon-hamburger.svg";
    }
}