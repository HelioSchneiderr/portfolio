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

function clickShow(){
      let body = document.querySelector(`body`)

      body.style.backgroundColor = "white";
}

let inside = document.getElementsByClassName('inside-card-projects')
let projects = document.querySelector('.card-projects')

console.log(inside[0].childNodes)


function showModal() {
  var element = document.getElementById("modal");
 

  element.classList.add("show-modal");
}

function closeModal() {
  var element = document.getElementById("modal");
  element.classList.remove("show-modal");
}





/*function seeMore(){
  let seeMore = document.querySelector(".see-more")

  seeMore.style.visibility = `visible`
  seeMore.style.backgroundColor = "#0202b165"
  seeMore.style.color = " white "
  seeMore.style.transition = "1s"
  
}

function seeNothing(){
  let seeMore = document.querySelector(".see-more")

  
  seeMore.style.visibility = `hidden `
  seeMore.style.backgroundColor = "#0202b100"
  seeMore.style.color = " #0202b100 "
  
  
}*/