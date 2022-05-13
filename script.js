// To make the navigation appear
const mobileMenu = document.querySelector('#mobile-menu')
const navUl = document.querySelector('.nav-items')
const navLinks = document.querySelectorAll('.nav-links');

mobileMenu.addEventListener("click", function(){
    navUl.classList.toggle("appear")
})

navLinks.forEach((navLink) =>{
    navLink.addEventListener('click', () => {
        navUl.classList.toggle("appear")
    })
})

// To animate on scroll
function animate() {
    var animation = document.querySelectorAll(".animate");
  
    for (var i = 0; i < animation.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animation[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        animation[i].classList.add("active");
      } else {
        animation[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", animate);    


