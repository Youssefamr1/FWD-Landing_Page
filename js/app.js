
/**
 * Define Global Variables
 * 
*/
// navbar global variables
const navbar = document.getElementById('navbar__list');
// sections global variables
const sections = document.querySelectorAll('section');

// create navbar
function navCreate(){
    let NB = ''; //standard for Navbar Building
    sections.forEach(section => {
        const sectionId = section.id;
        const sectionDatasetNav = section.dataset.nav;
        NB += `<li><a class="menu__link" href="#${sectionId}">${sectionDatasetNav}</a></li>`;
    });
    navbar.innerHTML = NB;
};

// Add class 'active' to section when near top of viewport


// Set sections as active

onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;
  
    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
        scrollPosition <
          section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
      ) {
        var currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
      }
    });
  };
  
  var removeAllActiveClasses = function () {
    document.querySelectorAll("nav a").forEach((el) => {
      el.classList.remove("your-active-class");
    });
  };
  
  var addActiveClass = function (id) {
    console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("your-active-class");
  };
  
  var navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      var currentId = e.target.attributes.href.value;
      var section = document.querySelector(currentId);
      var sectionPos = section.offsetTop;
    });
  });
navCreate();

