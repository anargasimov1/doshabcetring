
// hamburger menu

const bar = document.getElementById("bar"),
    hidden = document.getElementById("hidden");


let modal = false;

bar.onclick = () => {
    modal = !modal

    modal ? hidden.style.height = "150px" : hidden.style.height = "0"
}


const url = "https://best-fire-group.glitch.me/messages",
    message = document.getElementById("message"),
    names = document.getElementById("name"),
    phone = document.getElementById("phone"),
    send = document.getElementById("send");

send.onclick = () => {
    if (message.value.trim() !== "" && names.value.trim() !== "" && phone.value.trim() !== "") {
        let values = {
            message: message.value,
            name: names.value,
            phone: phone.value
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
    }
    message.value = "",
        phone.value = "",
        names.value = "";

     send.innerText = "Göndərildi"   

     setTimeout(()=>{
        send.innerText = "Göndər"
     }, 2000)
}
