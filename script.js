const headerMenu = document.querySelector('.header-menu');
const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamburger-icon');

function showMenu(){
    headerMenu.classList.add('mobile-menu');
    hamburgerIcon.classList.add('hide-hamburger-icon');
    closeIcon.classList.add('show-close-icon');
    document.body.classList.add('no-scroll');
}

function hideMenu(){
    headerMenu.classList.remove('mobile-menu');
    hamburgerIcon.classList.remove('hide-hamburger-icon');
    closeIcon.classList.remove('show-close-icon');
    document.body.classList.remove('no-scroll');
}

hamburgerIcon.addEventListener('click',showMenu);
closeIcon.addEventListener('click',hideMenu);



