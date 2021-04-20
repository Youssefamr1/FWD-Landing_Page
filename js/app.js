/**
 * Define Global Variables
 * 
*/
// navbar global variables
// sections global variables
// create navbar
const sections = document.querySelectorAll("section");

onscroll = function () {
  const scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      const currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

const removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

const addActiveClass = function (id) {
  // console.log(id);
  let selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let section = document.querySelector(currentId);
    let sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});