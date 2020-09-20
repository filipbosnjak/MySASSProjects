const menuButton = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn_burger')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');
        showMenu = true;
    }else{
        burger.classList.remove('open');
        showMenu = false;
    }
}