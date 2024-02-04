const slideContainer = document.getElementById("slide-container")
const textContainer = document.getElementById("text-container")

const slidesLength = slideContainer.children.length

document.body.style.setProperty("--slide-count", `${slidesLength - 1}`)

let activeSlide = 0

document.getElementById("left-arrow").onclick = () => {
    setSlide(activeSlide == 0 ? slidesLength - 1 : activeSlide - 1)

}

document.getElementById("right-arrow").onclick = () => {
    setSlide(activeSlide == slidesLength - 1 ? 0 : activeSlide + 1)
}

function setSlide(i) {
    activeSlide = i
    slideContainer.scrollTo({ left: slideContainer.children[i].offsetLeft, behavior: "smooth" })
    textContainer.scrollTo({ top: textContainer.clientHeight * i, behavior: "smooth" })
    document.body.style.setProperty("--active-slide", i)
    if (i == 0) document.body.classList.remove("dirty")
    else document.body.classList.add("dirty")
}

window.onresize = () => {
    setSlide(activeSlide)
}