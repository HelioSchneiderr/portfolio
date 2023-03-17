const sectionThree = document.getElementById(`sub-section-3`) //SeeMore
const sectionThreeLess = document.getElementById(`project-see-less`)
const buttonMoreLess = document.getElementById(`project-see-more`)

const buttonMoreSkills = document.getElementById(`project-see-more-skills`)
const sectionTwo= document.getElementById(`sub-section-2`)


const seeMore = (seeMore, moreOrLess)=>{
    seeMore.style.display= "block"
    moreOrLess.style.display = "none"
}

const seeLess = (seeLess, moreOrLess)=>{
    seeLess.style.display= "none"
    moreOrLess.style.display = "block"
    moreOrLess.style.margin = "auto"
}