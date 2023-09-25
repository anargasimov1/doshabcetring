
const ad = document.getElementById("ad"),
    link = document.getElementById("link"),
    Btn = document.getElementById("Btn"),
    btn = document.getElementById("btn"),
    url = "https://meadow-silk-gauge.glitch.me/galery",
    cards = document.querySelector(".cards")


function addelementtoscreen() {
    fetch(url)
        .then(res => res.json())
        .then(data => addelements(data))
        .catch(err => cards.innerHTML = err)
}

addelementtoscreen();

function addelements(par) {
    par.map(i => cards.innerHTML += ` <div class="card">
    <img class="card_img" src="${i.image}" alt="Doshabcatering">
    <button data-id="${i.id}" id="btn" type="button"><i class=" point fa-solid fa-trash-can"></i></button>
    </div>` )


}

Btn.onclick = () => {
    cards.innerHTML = "";
    if (ad.value.trim() !== "" && link.value.trim() !== "") {
        let element = {
            description: ad.value,
            image: link.value
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        })
    }
    ad.value = "";
    link.value = "";

}

document.onclick = (e) => {
    if (e.target.dataset.id) {
        let id = e.target.dataset.id;

        fetch(`${url}/${id}`, {
            method: "DELETE"
        })
    }

}
