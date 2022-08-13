
let burger = document.getElementsByClassName('header__burger')[0];
let cross = document.getElementsByClassName('header__close-btn')[0];
let burger_menu = document.getElementsByClassName('header__mobile')[0];
let logo = document.getElementsByClassName('header__top')[0].getElementsByClassName('header__logo')[0];

burger.addEventListener('click',burgerClick);

cross.addEventListener('click',crossClick);

function burgerClick(){
    burger_menu.classList.add('active');
    logo.classList.add('active');

    window.onclick = (event)=>{
        if(event.target.closest('.header__mobile')===null && event.target.closest('.header__burger')==null){
            crossClick();
        }
    }



}

function crossClick() {
    burger_menu.classList.remove('active');
    logo.classList.remove('active');
}

