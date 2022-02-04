const obs = document.querySelectorAll(".obs");

let options = {
  // root: null,
  rootMargin: "-8% 0px",
  threshold: 0,
};

// FOR OBS
function callback(entries) {
  // console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
    
  });
}

const observer = new IntersectionObserver(callback, options);

obs.forEach((item) => {
  observer.observe(item);
});

////////////////////////////////////

// PRELOADER PAGE TARIFS
const preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.style.display = "none";
}, 1900);

// TOGGLE + NAVIGATION
const toggle = document.getElementById("toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});
