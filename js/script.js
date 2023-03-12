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
let testimonialSlider = new Swiper('.testimonial-slider .swiper-container', {
    pagination: {
      el: '.testimonial-pagination',
      clickable:true,
    },
    // Set autoplay to loop through slides automatically
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
    }
  });
//   Testimonials section Ends here

//Contact Us section Starts here
const popupContainer = document.getElementById('contact-container');
const popupMessage = document.getElementById('popup-message');
const contactForm = document.getElementById('contact-form');
const closePopup = document.getElementById("close-popup");



contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const response = await fetch('https://formspree.io/f/mwkjbjkr', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });
  if (response.ok) {
    contactForm.reset();
    popupMessage.style.display = 'block';
    setTimeout(() => {
      popupMessage.style.display = 'none';

    },5000);

  } else {
    alert('Error submitting form!');
  }
});

//close button
closePopup.addEventListener("click", () => {
  popupMessage.style.display = "none";
});

