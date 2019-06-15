// PAGES
import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';




// constructor
const PageState = function() {
  let currentState = new homeState(this);
  
  // this.init = function() {
  //   window.location.hash = "#";
  //   this.change(new homeState);
  // }

  this.change = function(state) {
    currentState = state;
  }
};

// Instantiate pageState
const page = new PageState();

// Init the first state (homePage)
// page.init();



// console.log(new PageState(homeState));



// page Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      hero = document.getElementById('hero'),
      navLogo = document.querySelector('.navbar-brand');
      
 // Page Event Listeners

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);
  // e.preventDefault();
});
navLogo.addEventListener('click', (e) => {
  page.change(new homeState);
})

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);
  
  // e.preventDefault();
});

// Contact
hero.addEventListener('click', (e) => {
  page.change(new heroState);
  // e.preventDefault();
});

