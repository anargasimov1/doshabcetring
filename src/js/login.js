const btn = document.getElementById("btn"),
    password = document.getElementById("password"),
    url = "https://glib-colorful-animal.glitch.me/admin",
    text = document.querySelector(".text");



btn.onclick = () => {

    fetch(url)
        .then(res => res.json())
        .then(data => adminpanel(data))
}

function adminpanel(par) {
    if (par.name === login.value && par.password === password.value) {
        window.location.href = "admin.html";
        localStorage.setItem("parol", JSON.stringify(par))
    }
    else{
        text.style.display = "block";
    }

}




