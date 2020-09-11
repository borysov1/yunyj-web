//@Kevin Powell ()

const header = document.querySelector("header");
const sectionOne = document.querySelector(".intro")

const sectionOneOptions = {
   rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
   enteries, sectionOneObserver
   ) {
      enteries.forEach(entry =>{
         if(!entry.isIntersecting) {

            header.classList.add("nav-scrolled");
         } else {
            header.classList.remove("nav-scrolled");
         }
      })
   }, 
   sectionOneOptions);

sectionOneObserver.observe(sectionOne);