const modal = document.querySelector(".awards-section__modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".modal-icon");
const lockdown = document.querySelector ('body')

function toggleModal() {
    modal.classList.toggle("show-modal");
    lockdown.classList.toggle('lock');
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
};


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const modal2 = document.querySelector(".awards-section__modal2");
const trigger2 = document.querySelector(".trigger2");
const closeButton2 = document.querySelector(".modal-icon2");

function toggleModal2() {
    modal2.classList.toggle("show-modal2");
    lockdown.classList.toggle('lock');
}


function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
};


trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);

const modal3 = document.querySelector(".awards-section__modal3");
const trigger3 = document.querySelector(".trigger3");
const closeButton3 = document.querySelector(".modal-icon3");

function toggleModal3() {
    modal3.classList.toggle("show-modal2");
    lockdown.classList.toggle('lock');
}


function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
    }
};


trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);




