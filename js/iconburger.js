const icon = document.querySelector('.header-burger');
const overlayMenu = document.querySelector('.overlay-content')
const button = document.querySelector ('#toggle-content')
const lock = document.querySelector ('body')
const link = document.querySelector ('.overlay-content__list')


let menuOpen = false;

icon.addEventListener('click', () => {
   if (!menuOpen) {
      icon.classList.add('open');
      menuOpen = true;
   } else {
      icon.classList.remove('open');
      menuOpen = false;
    }
    
});



button.addEventListener ("click", () => {
   overlayMenu.classList.toggle('active');
   lock.classList.toggle('lock')
   
   

});

link.addEventListener ("click", () => {   
   overlayMenu.classList.toggle('active');
   icon.classList.remove('open');
   menuOpen = false
   lock.classList.remove('lock')
});

   