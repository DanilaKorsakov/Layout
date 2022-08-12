
let burger = document.getElementsByClassName('header__burger')[0];
let cross = document.getElementsByClassName('header__close-btn')[0];
let burger_menu = document.getElementsByClassName('header__mobile')[0];

burger.addEventListener('click',burgerClick);

cross.addEventListener('click',crossClick);

function burgerClick(){
    burger_menu.classList.add('active');

    window.onclick = (event)=>{
        console.log(event.target.closest('.header__mobile'));
        if(event.target.closest('.header__mobile')===null && !event.target.classList.contains('header__burger-menu')){
            crossClick();
        }
    }



}

function crossClick() {
    burger_menu.classList.remove('active');
}

