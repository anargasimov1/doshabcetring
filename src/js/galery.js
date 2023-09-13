

const bar = document.getElementById("bar"),
    hidden = document.getElementById("hidden");


let modal = false;

bar.onclick = () => {
    modal = !modal

    modal ? hidden.style.height = "150px" : hidden.style.height = "0"
}

const url = "https://meadow-silk-gauge.glitch.me/galery",
    galery = document.getElementById("galery");


fetch(url)
    .then(res => res.json())
    .then(data => addelement(data))
    .catch(err => galery.innerHTML = err)

function addelement(par) {
    for (let i = 0; i < par.length; ++i) {
        galery.innerHTML += `
        
        <div class="card">
            <img src=${par[i].image} alt="./">
            <p></p>
        </div>
    
        
        
        `
    }
}   