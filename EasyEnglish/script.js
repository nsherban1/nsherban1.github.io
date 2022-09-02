"use strict";

// For modal button #1
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

// For modal button #2
const modala = document.querySelector(".modala");
const overlaya = document.querySelector(".overlaya");
const btnCloseModala = document.querySelector(".close-modala");
const btnsOpenModala = document.querySelector(".show-modala");

// For modal button #3
const modalb = document.querySelector(".modalb");
const overlayb = document.querySelector(".overlayb");
const btnCloseModalb = document.querySelector(".close-modalb");
const btnsOpenModalb = document.querySelector(".show-modalb");

// For modal button #4
const modalc = document.querySelector(".modalc");
const overlayc = document.querySelector(".overlayc");
const btnCloseModalc = document.querySelector(".close-modalc");
const btnsOpenModalc = document.querySelector(".show-modalc");

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// For modal button #2
const openModala = function () {
  console.log("Button clicked");
  modala.classList.remove("hidden");
  overlaya.classList.remove("hidden");
};

const closeModala = function () {
  modala.classList.add("hidden");
  overlaya.classList.add("hidden");
};

btnsOpenModala.addEventListener("click", openModala);

btnCloseModala.addEventListener("click", closeModala);
overlaya.addEventListener("click", closeModala);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modala.classList.contains("hidden")) {
    closeModala();
  }
});
// For modal button #3
const openModalb = function () {
  console.log("Button clicked");
  modalb.classList.remove("hidden");
  overlayb.classList.remove("hidden");
};

const closeModalb = function () {
  modalb.classList.add("hidden");
  overlayb.classList.add("hidden");
};

btnsOpenModalb.addEventListener("click", openModalb);

btnCloseModalb.addEventListener("click", closeModalb);
overlayb.addEventListener("click", closeModalb);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modalb.classList.contains("hidden")) {
    closeModalb();
  }
});
// For modal button #4
const openModalc = function () {
  console.log("Button clicked");
  modalc.classList.remove("hidden");
  overlayc.classList.remove("hidden");
};

const closeModalc = function () {
  modalc.classList.add("hidden");
  overlayc.classList.add("hidden");
};

btnsOpenModalc.addEventListener("click", openModalc);

btnCloseModalc.addEventListener("click", closeModalc);
overlayc.addEventListener("click", closeModalc);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modalc.classList.contains("hidden")) {
    closeModalc();
  }
});

window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};
