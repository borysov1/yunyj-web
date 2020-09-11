const icon = document.querySelector('.header-burger');
let menuOpen = false;
icon.addEventListener('click', () => {
   if (!menuOpen) {
      icon.classList.add('open');
      menuOpen = true;
   }else {
      icon.classList.remove('open');
      menuOpen = false;
    }
});