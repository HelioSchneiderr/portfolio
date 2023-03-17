function menuShow(){
    let menuMobile = document.querySelector(`.mobile-menu`);
    if (menuMobile.classList.contains(`open`)){
        menuMobile.classList.remove(`open`)
        document.querySelector(`.icon`).src = "assets/img/open_icon.png"
    } else{
      menuMobile.classList.add(`open`);
      document.querySelector(`.icon`).src = "assets/img/close_icon.png"

    }
}
