
function showMenu() {
    let menu = document.getElementById('nav');
    if (menu.className == "header__nav") {
        menu.className = "header__responsive__nav";
    }
    else{
        menu.className = "header__nav"
    }
}