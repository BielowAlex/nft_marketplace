const popupBtn = document.querySelector('.popup_btn');
const popup = document.querySelector('.popup');
let scroll;

popupBtn.onclick = () => {
    if (popupBtn.classList.contains('_burger_close')) {
        popupBtn.classList.remove('_burger_close');
        popup.classList.add('_active');
        scroll = window.scrollY;
        window.addEventListener('scroll',()=>{
            if (scroll>window.scrollY||scroll<window.scrollY) {
                popupBtn.classList.add('_burger_close');
                popup.classList.remove('_active');
            }
        })

    }  else {
        popupBtn.classList.add('_burger_close');
        popup.classList.remove('_active');
    }

}

popup.onclick = () => {
    popupBtn.classList.add('_burger_close');
    popup.classList.remove('_active');
}

