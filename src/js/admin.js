const ad = document.getElementById("ad"),
    link = document.getElementById("link"),
    Btn = document.getElementById("Btn"),
    btn = document.getElementById("btn"),
    url_galery = "https://meadow-silk-gauge.glitch.me/galery",
    cards = document.querySelector(".cards"),
    url_messages = "https://best-fire-group.glitch.me/messages",
    list = document.getElementById("list");




let parol = localStorage.getItem("parol")

window.onload = () => {
    if (parol === null) {
        window.location.href = "login.html"
    }

}

function addelementtoscreen() {
    fetch(url_galery)
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
        fetch(url_galery, {
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

        fetch(`${url_galery}/${id}`, {
            method: "DELETE"
        })
    }

}

fetch(url_messages)
    .then(res => res.json())
    .then(data => addmessages(data))
    .catch(err => list.innerHTML = err)




function addmessages(par) {
    for (let i = 0; i < par.length; ++i) {

        list.innerHTML +=
            `
          <tr>
           <td align="center">${i + 1}</td>
        <td>${par[i].name}</td>
        <td style="padding-left: 5px;">${par[i].message}</td>
         <td style="padding-left: 10px;">${par[i].phone}</td>
        <td align="center"><button style="cursor: pointer;" data-role="delete" data-id="${par[i].id}" type="button"><i class=" delete fa-solid fa-trash"></i></button></td>
       </tr>

        `

    }
}

document.onclick = e => {
    let id = e.target.dataset.id;

    if (e.target.dataset.role) {
        fetch(`${url_messages}/${id}`, {
            method: "DELETE"
        })
    }
}

const lunch = document.getElementById("lunch")
url_lunch = "https://low-shimmer-mulberry.glitch.me/photos",
    newlunch = document.getElementById("add_lunch"),
    btn_lunch = document.getElementById("btn_lunch"),
    url_prince = "https://low-shimmer-mulberry.glitch.me/prince",
    sendPrince = document.getElementById("sendPrince");

fetch(url_lunch)
    .then(res => res.json())
    .then(data => addlunch(data))
    .catch(err => lunch.innerHTML = err);

function addlunch(par) {
    par.map(i => lunch.innerHTML += ` <div class="card">
    <img class="card_img" src="${i.img}" alt="Doshabcatering">
    <button data-role ="remove" data-id="${i.id}" id="btn" type="button"><i class=" point fa-solid fa-trash-can"></i></button>
    </div>`)
}

document.onclick = e => {
    let id = e.target.dataset.id;

    if (e.target.dataset.role === "remove") {
        fetch(`${url_lunch}/${id}`, {
            method: "DELETE"
        })

    }
}

btn_lunch.onclick = () => {
    if (newlunch.value.trim() !== "") {
        let element = {
            img: newlunch.value
        }
        fetch(url_lunch, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(element)
        })
    }
    if (sendPrince.value !== "") {
        let newprince = {
            prince: sendPrince.value
        }
        fetch(`${url_prince}/${1}`, {
            method: "DELETE"
        })
            .then(fetch(url_prince, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newprince)
            }))
    }
    newlunch.value = "";
    sendPrince.value = "";

}

