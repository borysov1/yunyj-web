
const countDownDate = new Date("Jul 5, 2020 8:00:00").getTime();

const x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("time-1").innerHTML = days + "д " + hours + "ч "
  + minutes + "м " + seconds + "с ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-1").innerHTML = "Смена началась!";


  }
}, 1000);

const countDownDate2 = new Date ("Jul 22, 2020 8:00:00").getTime();

const y = setInterval(function() {

   const now = new Date().getTime();

   const distance = countDownDate2 - now;
     
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
   document.getElementById("time-2").innerHTML = days + "д " + hours + "ч "
   + minutes + "м " + seconds + "с ";
     
   if (distance < 0) {
     clearInterval(y);
     document.getElementById("time-2").innerHTML = "Смена началась!";

   }
 }, 1000);

 const countDownDate3 = new Date ("Aug 08, 2020 8:00:00").getTime();

const z = setInterval(function() {

   const now = new Date().getTime();

   const distance = countDownDate3 - now;
     
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
   document.getElementById("time-3").innerHTML = days + "д " + hours + "ч "
   + minutes + "м " + seconds + "с ";
     
   if (distance < 0) {
     clearInterval(z);
     document.getElementById("time-3").innerHTML = "Смена началась!";

   }
 }, 1000);