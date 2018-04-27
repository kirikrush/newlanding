
function showMenu() {
    let menu = document.getElementById('nav');
    switch (menu.className) {
        case "header__nav":
            menu.className = "header__responsive__nav"
            break;
        case "header__responsive__nav":
            menu.className = "header__nav";
            break;
    }
}

function showBotMenu() {
    let menu = document.getElementById('foot_nav');
    switch (menu.className) {
        case "footer__nav":
            menu.className = "footer__responsive__nav";
            break;
        case "footer__responsive__nav":
            menu.className = "footer__nav";
            break;
    }
}


function hideMenu() {
    let menu = document.getElementById('nav');
    if (menu.className = "header__responsive__nav") {
        menu.className = "header__nav";
    }
}

function hideBotMenu() {
    let menu = document.getElementById('foot_nav');
    if (menu.className = "footer__responsive__nav") {
        menu.className = "footer__nav";
    }
}