const toggle = document.getElementById("toggle");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

// largeur de l'écran
const larg = document.body.clientWidth;
//

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (larg > 1024 && scrollY > 80) {
    header.style.background = "var(--grey)";
    header.style["boxShadow"] = "10px 20px 40px rgba(46, 58, 74,0.3)";
  } else {
    header.style.background = "var(--white)";
    header.style["boxShadow"] = "0 0 0 rgba(46, 58, 74,0.3)";
  }
});

// DYNAMIC TEXT HOME PAGE

const target = document.getElementById("target");

const array = ["services", "savoir", "sourire", "qualité"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.classList.add("letter");
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];
  target.style.transform = `translateX(-12px)`;
  target.style.color = "var(--mauve)";

  setTimeout(() => {
    letter.remove();
  }, 2300);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2300);
    }
  }, 50);
};

loop();
