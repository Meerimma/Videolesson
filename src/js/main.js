
document.querySelector('.btn_login').onclick = function () {
   document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_login').classList.add('active')
}


document.querySelector('.btn_signUp').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form_signup').classList.add('active')
}



document.querySelector('.popup__close').onclick = function(){
    document.querySelector('.overlay').classList.remove('overlay_active')
    document.querySelector('.popup__form_login').classList.remove('active')
    document.querySelector('.popup__form_signup').classList.remove('active')
}


document.querySelector('.tools__more').onclick = function(){
    document.querySelectorAll('.tools__card-hide').forEach( function (card) {
        card.classList.toggle('.active')
    })
}




