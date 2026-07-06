/* ===========================================
   EUROVEEL
   Version 1.0
=========================================== */

// Current Year
const footer = document.querySelector(".footer-copy");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Euroveel. All rights reserved.`;
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Scroll Reveal
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".step-card,.feature-card,.industry-card,.business-section,.creator-section,.contact-section"
).forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".7s";

    observer.observe(item);

});

// Contact Form
const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// Navbar Shadow
window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>40){

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="0 5px 25px rgba(0,0,0,.06)";

}

});

// Button Hover Animation
document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

console.log("Euroveel Website Loaded Successfully");
