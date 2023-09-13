

const bar = document.getElementById("bar"),
    hidden = document.getElementById("hidden");


let modal = false;

bar.onclick = () => {
    modal = !modal

    modal ? hidden.style.height = "150px" : hidden.style.height = "0"
}

const url = "https://meadow-silk-gauge.glitch.me/galery",
    left = document.getElementById("left"),
    rigth = document.getElementById("rigth"),
    swiper = document.getElementById("swiper_slide"),
    swiper_item = document.getElementById("swiper_item");

let temp = 0;

left.onclick = () => {
    temp++;
    swiper.style.transform = `translateX(${temp * -420}px)`
}


rigth.onclick = () => {
    temp--;
    swiper.style.transform = `translateX(${temp * -420}px)`
}

fetch(url)
    .then(res => res.json())
    .then(data => addelement(data))
    .catch(err => galery.innerHTML = err)

function addelement(par) {

    par.map(i => swiper_item.innerHTML +=` <img src=${i.image} alt="./">`)
}