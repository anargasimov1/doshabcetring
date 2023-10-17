

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
    par.map(i => swiper_item.innerHTML += ` <img  src=${i.image} alt="./">`)
}

left.onclick = () => {
    temp++;
    swiper.style.transform = `translateX(${temp * -420}px)`;
    if (temp === count - 3) {
        temp = 0;
    }
    if (innerWidth < 700) {
        swiper.style.transform = `translateX(${temp * -310}px)`;
    }

}


rigth.onclick = () => {
    temp--;
    if (temp === -1) {
        temp = count - 3
    }
    swiper.style.transform = `translateX(${temp * -420}px)`;
    if (innerWidth < 700) {
        swiper.style.transform = `translateX(${temp * -310}px)`;
    }

}

fetch(url)
    .then(res => res.json())
    .then(data => addelement(data))
    .catch(err => swiper.innerHTML = err)

const url_photos = "https://low-shimmer-mulberry.glitch.me/photos",
    photos = document.getElementById("photos"),
    lunch = document.getElementById("lunch"),
    price = document.getElementById("price"),
    url_prince = "https://low-shimmer-mulberry.glitch.me/prince"

fetch(url_photos)
    .then(res => res.json())
    .then(data => photo(data))
    .catch(err => photos.innerHTML = err);

fetch(url_prince)
    .then(res => res.json())
    .then(data => price.innerHTML = data.prince)


function photo(par) {
    for (let i = 0; i < par.length; ++i) {
        photos.innerHTML +=
            `
        <div class="card">
        <img class="image" src="${par[i].img}" alt="">
          </div>
        `
    }
}

lunch.style.color = "red";

setInterval(() => {
    lunch.style.scale = "1.4";
    price.style.scale = "1.4";

}, 750)

setInterval(() => {
    lunch.style.scale = "0.8";
    price.style.scale = "0.8";
}, 1500)

function businesslunch() {
    if (innerWidth < 900) {
        lunch.style.fontSize = "15px"
    }
}

businesslunch();

