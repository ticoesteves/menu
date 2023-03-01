var menu = document.getElementById("menu_mobile");
function MostraMenuMobile() {

    if(menu.style.display == "none") {
        menu.style.display = "block";
        menu.classList.add("animate__fadeInDown");
    } else {
        menu.style.display = "none";
        menu.classList.remove("animate__fadeInDown");
    }
}

function hideMenu() {
    menu.style.display = "none";
}