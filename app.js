const links = document.querySelector("ul");
const btnContact = document.querySelector("button");

const section3 = document.querySelector("#section--3");

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
