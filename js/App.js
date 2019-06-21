import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';
import { heroPage1 } from './hero-pages/heroPage1.js';
import { heroPage2 } from './hero-pages/heroPage2.js';


// Local - Live environment. Uncomment current
// var $Host = "";             // localhost
var $Host = "/coffer";     // live server


// show hidden nav-bar
document.querySelector('nav').classList.remove("d-none");


let currentState;
let result;

// constructor
const PageState = function() {
  currentState = new homeState(this);
  history.pushState('home', 'Selected: home', `${$Host}/home` );

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};


// Instantiate pageState
const page = new PageState();
page.init();    // init the first state (home state)
currentState = new homeState(this);



// Active link function
const checkIfActivePage = (e) => {
  if(e.target.parentNode.classList.contains('active') ){    // if page already active, do not add 'active' class
    return result = false;

  }else {
    // 1. remove active from any <li> tag
    let array = document.querySelectorAll('.nav-item');
    array.forEach(function(liItem){
      liItem.classList.remove('active');
    })

    // 2. add active to current <li>
    e.target.parentNode.classList.add('active');
    return result = true;
  }
}


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

    } else
    if(window.history.state == "hero/2"){
      page.change(new heroPage2);

    } else{
      console.log('null');
      selectPage(null);
    }
  }
});

// browser history page selector
function selectPage(id){
  let links = Array.from(document.getElementsByClassName('nav-link'));
  
  links.forEach(b => {
    b.classList.toggle('selected', b.id === id);
  });
}



// Page Event Listeners
home.addEventListener('click', (e) => {
  
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new homeState),
    history.pushState('home', 'Selected: home', `${$Host}/home` ),
    selectPage('home')
    )  // set page as active if result true
    e.preventDefault();
});


navLogo.addEventListener('click', (e) => {
  //checkIfActivePage(e); // checking if active

  //result === true && page.change(new homeState);  // set page as active if result true
  e.preventDefault();
})


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

// Hero Sub pages tags
export const storeAtag = document.createElement('a');
export const storeBtag = document.createElement('a');


// Hero Sub page 1
storeAtag.addEventListener('click', (e) => {
  window.scrollTo(0, 65); // 65px down

  document.querySelectorAll('.nav-item')[1].classList.remove('active'); // remove active underline from hero main

  page.change(new heroPage1);
  history.pushState('hero/1', 'Selected: hero/1', `${$Host}/hero/1` );
  selectPage('hero/1');

  e.preventDefault();
});


// Hero Sub page 2
storeBtag.addEventListener('click', (e) => {
  window.scrollTo(0, 65); // 65px down

  document.querySelectorAll('.nav-item')[1].classList.remove('active'); // remove active underline from hero main

  page.change(new heroPage2);
  history.pushState('hero/2', 'Selected: hero/2', `${$Host}/hero/2` );
  selectPage('hero/2');

  e.preventDefault();
});




/* NAV ICONS ANIMATION */
document.querySelector('.icons-container').addEventListener('mouseenter', (e) => {
  e.target.style.backgroundColor = '#eaeaea';
  const icons = Array.from(e.target.children);
  icons.map((icon) => {
    icon.style.animationPlayState='paused';
  })

});
document.querySelector('.icons-container').addEventListener('mouseleave', (e) => {
  e.target.style.backgroundColor = '';
  const icons = Array.from(e.target.children);
  icons.map((icon) => {
    icon.style.animationPlayState='running';
  })

});