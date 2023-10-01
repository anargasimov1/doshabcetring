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
        fetch(`${url_messages}/${id}`,{
            method:"DELETE"
        })
    }
}