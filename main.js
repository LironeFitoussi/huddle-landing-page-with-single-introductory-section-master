window.addEventListener("load", findWidth)
window.addEventListener("resize", findWidth);

let backGroundImg = document.querySelector("#backgroundIMG")

function findWidth() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 375) {
        backGroundImg.src = "./images/bg-mobile.svg"
    } else if (window.innerWidth <= 1440){
        backGroundImg.src = "./images/bg-desktop.svg"
    } 
}
