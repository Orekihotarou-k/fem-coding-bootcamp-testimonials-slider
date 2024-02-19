// const testimonials = document.querySelectorAll('.testimonial');
// let currentTestimonial = 0;

// function showNextTestimonial() {
//     if (currentTestimonial < testimonials.length - 1) {
//         testimonials[currentTestimonial].classList.add('hidden');
//         currentTestimonial++;
//         testimonials[currentTestimonial].classList.remove('hidden');
//     }
// }

// function showPreviousTestimonial() {
//     if (currentTestimonial > 0) {
//         testimonials[currentTestimonial].classList.add('hidden');
//         currentTestimonial--;
//         testimonials[currentTestimonial].classList.remove('hidden');
//     }
// }

const testimonial = document.querySelectorAll(".slide-col")
let currentTestimonial = 0

function showNextTestimonial() {
    if (currentTestimonial > 0) {
        testimonial[currentTestimonial].classList.add("hidden")
        currentTestimonial--
    }
    testimonial[currentTestimonial].classList.remove("hidden")
}

function showPreviousTestimonial() {
    if (currentTestimonial < testimonial.length - 1) {
        testimonial[currentTestimonial].classList.add("hidden")
        currentTestimonial++
    }
    testimonial[currentTestimonial].classList.remove("hidden")
}