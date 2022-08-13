
let burger = document.getElementsByClassName('header__burger')[0];
let cross = document.getElementsByClassName('header__close-btn')[0];
let burger_menu = document.getElementsByClassName('header__mobile')[0];
let logo = document.getElementsByClassName('header__top')[0].getElementsByClassName('header__logo')[0];
let header = document.getElementsByClassName('header')[0];

const screenWidth = document.documentElement.clientWidth;

let header_hight = header.clientHeight;

burger.addEventListener('click',burgerClick);

cross.addEventListener('click',crossClick);

function burgerClick(){
    burger_menu.classList.add('active');
    logo.classList.add('active');
    document.body.classList.add('active');

    window.onclick = (event)=>{
        if(event.target.closest('.header__mobile')===null && event.target.closest('.header__burger')==null){
            crossClick();
        }
    }



}

function crossClick() {
    burger_menu.classList.remove('active');
    logo.classList.remove('active');
    document.body.classList.remove('active');
}

if(screenWidth>1024) {

    window.onscroll = changeHeader;

    let lastScroll = 0;


    function changeHeader() {

        let top = document.documentElement.scrollTop;

        if(lastScroll>top){
            header.style.top = '0';
        }else{
            if(window.pageYOffset>200){
                header.style.top=`-${header_hight}px`;
            }
        }

        lastScroll = top;
    }

}


