 /* Navigation Section starts here */
 const hamburger = document.querySelector(".hamburger")
 const navMenu = document.querySelector(".nav-menu")
 
 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 })
 //for closing the menu on clicking any nav link i.ehome,about us etc

 document.querySelectorAll(".nav-link")
 .forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
 }))
 /* Navigation Section Ends here */

/* image slider (hero section)  starts here */
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
         delay: 3000,
         disableOnInteraction:true, //turn this true or false depending on whether to stop autoplay when user interacts

    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
/* image slider (hero section)  ends here */

// testimonials section starts here
// Initialize Swiper JS
var testimonialSlider = new Swiper('.testimonial-slider .swiper-container', {
    // Add pagination and navigation buttons
    pagination: {
      el: '.testimonial-slider .swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.testimonial-slider .swiper-button-next',
      prevEl: '.testimonial-slider .swiper-button-prev'
    },
    // Set autoplay to loop through slides automatically
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
