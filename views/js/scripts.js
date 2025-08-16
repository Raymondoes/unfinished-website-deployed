const menuDiv = document.getElementById('mobile-menus');

function menu () {
    menuDiv.style.display = 'grid';
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '0';
    menuDiv.style.left = '0';
    menuDiv.style.width = '100vw';
    menuDiv.style.height = '100vh';
    menuDiv.style.zIndex = '9999';
}

function closebtn () {
    menuDiv.style.display = 'none';
}
