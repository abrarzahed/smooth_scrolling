const links = document.querySelector("ul");
const btnContact = document.querySelector("button");

const section3 = document.querySelector("#section--3");

const nav = document.querySelector("nav");

const allSections = document.querySelectorAll("section");

//=== scroll in to contact section  ===//
btnContact.addEventListener("click", function () {
  const s3cords = section3.getBoundingClientRect();
  console.log(s3cords);

  window.scrollTo({
    left: s3cords.left + window.pageXOffset,
    top: s3cords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

//=== main navigation  ===//
links.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//=== menu fade animation  ===//
const handleFade = function (e, animationProperty) {
  if (!e.target.classList.contains("link")) return;
  const target = e.target;
  const siblings = target.closest("ul").querySelectorAll(".link");

  const logo = target.closest("nav").querySelector("h2");

  logo.style.opacity = animationProperty;

  siblings.forEach((el) => {
    if (el !== target) el.style.opacity = animationProperty;
  });
};

nav.addEventListener("mouseover", function (e) {
  handleFade(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleFade(e, 1);
});

//=== section reveal animation  ===//
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
  } else {
    entry.target.classList.add("section--hidden");
  }
};
const obsOps = {
  root: null,
  threshold: 0.2,
};
const sectionObserver = new IntersectionObserver(revealSection, obsOps);

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
