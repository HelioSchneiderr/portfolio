const sectionThree = document.getElementById(`sub-section-3`) //SeeMore
const sectionThreeLess = document.getElementById(`project-see-less`) 
const buttonMoreLess = document.getElementById(`project-see-more`)

const buttonMoreSkills = document.getElementById(`project-see-more-skills`)
const sectionTwo= document.getElementById(`sub-section-2`)


const seeMore = (seeMore, moreOrLess)=>{
    seeMore.style.display= "block"
    seeMore.style.transition = "1s"
    moreOrLess.style.display = "none"
    sectionThreeLess.style.display = "block"
    sectionThreeLess.style.margin = "auto"

}

const seeLess = (seeLess, moreOrLess)=>{
    seeLess.style.display= "none"
    moreOrLess.style.display = "block"
    moreOrLess.style.margin = "auto"
    sectionThreeLess.style.display = "none"
}