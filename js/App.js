
// PAGES
import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';




let currentState;

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
  if(e.target.parentNode.classList.contains('active') ){ 
    console.log('active, exit');
    return;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })

    // add active to current <li>
    e.target.parentNode.classList.add('active');

    

    page.change(new homeState);
  }

  

  // set page as active
  
  // e.preventDefault();
});
// Nav - home
navLogo.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('active') ){ 
    console.log('active, exit');
    return;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })
    
    // add active to current <li>
    e.target.parentNode.classList.add('active');

    page.change(new homeState);
  }
})

// About
about.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('active') ){ 
    console.log('active, exit');
    return;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })
    
    // add active to current <li>
    e.target.parentNode.classList.add('active');

    page.change(new aboutState);
  }
  // e.preventDefault();
});

// Hero
hero.addEventListener('click', (e) => {
  
  if(e.target.parentNode.classList.contains('active') ){ 
    console.log('active, exit');
    return;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })

    // add active to current <li>
    e.target.parentNode.classList.add('active');

    

    page.change(new heroState);
  }
  // e.preventDefault();
});

