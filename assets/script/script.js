const sectionThree = document.getElementById(`sub-section-3`)
const sectionThreeLess = document.getElementById(`project-see-less`)
const buttonMoreLess = document.getElementById(`project-see-more`)

const seeMore = (seeMore)=>{
    seeMore.style.display= "block"
    buttonMoreLess.style.display = "none"
}

const seeLess = (seeLess)=>{
    seeLess.style.display= "none"
    buttonMoreLess.style.display = "block"
}