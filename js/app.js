/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navbar global variables
const navbar = document.getElementById('navbar__list');
// sections global variables
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// create nav
function navCreate(){
    let navSC = '';
    // looping over all sections
    sections.forEach(section => {
        const sectionId = section.id;
        const sectionDatasetNav = section.dataset.nav;
        navSC += `<li><a class="menu__link" href="#${sectionId}">${sectionDatasetNav}</a></li>`;
    });
    // append all elements to the navigation
    navbar.innerHTML = navSC;
};
navCreate();


// Add class 'active' to section when near top of viewport
function sectionsActivate(item){
    let sectionLocation=item.getBoundingClientRect();
    return (sectionLocation.top >=0);
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function togleActiveClass(){
    for (section of sections){
        if (sectionsActivate(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else {section.classList.remove('your-active-class');}
    }
}
document.addEventListener('scroll',togleActiveClass);
