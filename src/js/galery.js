

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
let count = 0;

function addelement(par) {
    count = par.length
    par.map(i => swiper_item.innerHTML += ` <img class="image" src=${i.image} alt="./">`)
}

left.onclick = () => {
    temp++;
    swiper.style.transform = `translateX(${temp * -420}px)`;
    if (temp === count - 3) {
        temp = 0;
    }

}


rigth.onclick = () => {
    temp--;
    if (temp === -1) {
        temp = count -3
    }
    swiper.style.transform = `translateX(${temp * -420}px)`;
   

}

fetch(url)
    .then(res => res.json())
    .then(data => addelement(data))
    .catch(err => swiper.innerHTML = err)

