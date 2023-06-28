
const fadeInElement = document.querySelectorAll(".fadeInStart");

function handleScroll() {
  
    fadeInElement.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight) {
        element.classList.add('fadeIn');
        
      };
    })
}
window.addEventListener('scroll', handleScroll);