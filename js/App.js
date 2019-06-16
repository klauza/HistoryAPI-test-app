
// PAGES
import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';




let currentState;
let result; 

// constructor
const PageState = function() {
  currentState = new homeState(this);

  // this.init = function() {
  //   window.location.hash = "#";
  //   this.change(new homeState);
  // }

  this.change = function(state) {
    currentState = state;
  }
};

const checkIfActivePage = (e) => {
  if(e.target.parentNode.classList.contains('active') ){ 
    console.log('active, exit');
    result = false;
    return result;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })

    // add active to current <li>
    e.target.parentNode.classList.add('active');
    result = true;
    return result;
  }
}



// Instantiate pageState
const page = new PageState();
// Init the first state (homePage)
// page.init();

//currentState = new homeState(this);
  


// page Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      hero = document.getElementById('hero'),
      navLogo = document.querySelector('.navbar-brand');

    


// Page Event Listeners
// Home
home.addEventListener('click', (e) => {
  checkIfActivePage(e); // checking if active

  result === true && page.change(new homeState);  // set page as active if result true

  // e.preventDefault();
});


// Nav - home
navLogo.addEventListener('click', (e) => {
  checkIfActivePage(e); // checking if active

  result === true && page.change(new homeState);  // set page as active if result true

})



// About
about.addEventListener('click', (e) => {
  checkIfActivePage(e); // checking if active

  result === true && page.change(new aboutState);  // set page as active if result true

  // e.preventDefault();
});



// Hero
hero.addEventListener('click', (e) => {
  checkIfActivePage(e); // checking if active

  result === true && page.change(new heroState);  // set page as active if result true

  // e.preventDefault();
});

