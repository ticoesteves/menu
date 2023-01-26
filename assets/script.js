function MostraMenuMobile() {
    var menu = document.getElementById('menu_mobile');

    if(menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}