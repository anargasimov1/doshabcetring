"use strick";

const cards_1 = document.getElementById("cards_1"),
    card_2 = document.getElementById("cards_2"),
    url_photos = "https://cottony-faithful-direction.glitch.me/photos";

fetch(url_photos)
    .then(r => r.json())
    .then(data => add(data))
    .catch(err => cards_1.innerHTML = `${err}`)


function add(par) {
    let photos_1 = par.splice(0, 4);
    photos_1.map(i => cards_1.innerHTML +=

        `
        <div class="card">
    <img class="card_img" src="${i.img}" alt="">
        <p class="card_title">${i.name}</p>
        <span class="card_text">${i.title}</span>
</div>
        
        `
    );

    let photos_2 = par.splice(0, 8);
    console.log(photos_2)
    photos_2.map(i => card_2.innerHTML +=

        `
        <div class="card">
        <img class="card_img" src="${i.img}" alt="">
            <p class="card_title">${i.name}</p>
            <span class="card_text">${i.title}</span>
    </div>
        
        `
    )
}

// hamburger menu

const bar = document.getElementById("bar"),
    hidden = document.getElementById("hidden");


let modal = false;

bar.onclick = () => {
    modal = !modal

    modal ? hidden.style.height = "150px" : hidden.style.height = "0"
}