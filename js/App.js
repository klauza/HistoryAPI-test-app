import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';
import { heroPage1 } from './hero-pages/heroPage1.js';


// For elegance 
var $Host = "";          // localhost
// var $Host = "/Boot";  // live server


// show hidden nav-bar
document.querySelector('nav').classList.remove("d-none");


let currentState;
let result; 

// constructor
const PageState = function() {
  let loc = location.origin;
  currentState = new homeState(this);
  history.pushState('home', 'Selected: home', `${$Host}/home` );

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

const checkIfActivePage = (e) => {
 
  if(e.target.parentNode.classList.contains('active') ){  // if page already active
    console.log('active, exit');
    
    return result = false;
  }else {
    // remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })

    // add active to current <li>
    e.target.parentNode.classList.add('active');
    
    return result = true;
  }
}



// Instantiate pageState
const page = new PageState();
// Init the first state (homePage)
  page.init();

currentState = new homeState(this);
  


// page Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      hero = document.getElementById('hero'),
      navLogo = document.querySelector('.navbar-brand');





window.addEventListener('popstate', e => {
  // delete all actives
  let array = document.querySelectorAll('.nav-item');
  array.forEach(function(liItem){
    liItem.classList.remove('active');
  })
  
  if (e.state !== null) {
    console.log('not null');
    selectPage(e.state.id);
    if(window.history.state == "home"){
      array[0].classList.add('active'); // home active
      page.change(new homeState);

    } else
    if(window.history.state == "hero"){
      array[1].classList.add('active');
      page.change(new heroState);

    } else 
    if(window.history.state == "about"){
      array[2].classList.add('active');
      page.change(new aboutState);
      
    } else
    if(window.history.state == "hero/1"){
      page.change(new heroPage1);
      console.log('switch to heropage1');
    } else{
      console.log('null');
      selectPage(null);
    }
  }
});

// TESTING
function selectPage(id){
  let links = Array.from(document.getElementsByClassName('nav-link'));
  
  links.forEach(b => {
    b.classList.toggle('selected', b.id === id);
  });
}



// Page Event Listeners
// Home
home.addEventListener('click', (e) => {
  
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new homeState),
    history.pushState('home', 'Selected: home', `${$Host}/home` ),
    selectPage('home')
    )  // set page as active if result true
    e.preventDefault();
});


// Nav - home
navLogo.addEventListener('click', (e) => {
  //checkIfActivePage(e); // checking if active

  //result === true && page.change(new homeState);  // set page as active if result true
  e.preventDefault();
})


// Hero
hero.addEventListener('click', (e) => {
  e.preventDefault();
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new heroState),
    history.pushState('hero', 'Selected: hero', `${$Host}/hero` ),
    selectPage('hero')
    )  // set page as active if result true
   e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  e.preventDefault();
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new aboutState),
    history.pushState('about', 'Selected: about', `${$Host}/about` ),
    selectPage('about')
    )  // set page as active if result true
   e.preventDefault();
});





// Subpages in /hero
// create hidden <a> element in a very unprofessional way
// <a id="card-1" class="hero-link" href="#">Link</a>
export const storeAtag = document.createElement('a')
storeAtag.innerText = 'link-1';
storeAtag.id = 'card-1-test';
storeAtag.classList.add('hero-link');
storeAtag.setAttribute('href', '#');




storeAtag.addEventListener('click', (e) => {

   document.querySelectorAll('.nav-item')[1].classList.remove('active'); // remove active underline from hero main

    page.change(new heroPage1);
    history.pushState('hero/1', 'Selected: hero/1', `${$Host}/hero/1` );
    selectPage('hero/1');
   
   e.preventDefault();
});