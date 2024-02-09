const nextButton = document.querySelector(".next")
const previousButton = document.querySelector(".previous")

nextButton.addEventListener("click", () => {
    let testimonials = document.querySelectorAll(".slider-item")
    document.querySelector(".testimonial-slider").appendChild(testimonials[0])
})