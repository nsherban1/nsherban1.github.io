"use strict";

const form_control = document.querySelector(".form-control");
const results = document.getElementById("results");
const hidden = document.querySelector(".hidden");
const wrapper = document.querySelector(".wrapper");
const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".btn");
const allSections = document.querySelectorAll(".backgroundband2");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// listen for user events
form_control.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // get user search input converted to lowercase
  const searchQuery = value.toLowerCase();

  for (const nameElement of namesFromDOM) {
    // store name text and convert to lowercase
    let name = nameElement.textContent.toLowerCase();

    // compare current name to search input
    if (name.includes(searchQuery)) {
      // found name matching search, display it
      nameElement.style.display = "block";
    } else {
      // no match, don't display name
      nameElement.style.display = "none";
    }
  }
});

form_control.addEventListener("click", function () {
  hidden.classList.remove("hidden");
});

wrapper.addEventListener("click", function () {
  hidden.classList.add("hidden");
});

// btn.addEventListener("click", function () {
//   console.log("button clicked");
//   if (value.includes("colombia")) {
//     location.href = Colombia / colombia.html;
//   }
// });

//Reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
