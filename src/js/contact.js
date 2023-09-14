
// hamburger menu

const bar = document.getElementById("bar"),
    hidden = document.getElementById("hidden");


let modal = false;

bar.onclick = () => {
    modal = !modal

    modal ? hidden.style.height = "150px" : hidden.style.height = "0"
}