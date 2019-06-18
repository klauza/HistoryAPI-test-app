import { homeState } from './home.js';
import { aboutState } from './about.js';
import { heroState } from './hero.js';

// show hidden nav-bar
document.querySelector('nav').classList.remove("d-none");


let currentState;
let result; 

// constructor
const PageState = function() {
  currentState = new homeState(this);
  history.pushState('home', 'Selected: home', './home' );

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






// Prevent from refresh the page
// document.onkeydown = function() 
// {
//     switch (event.keyCode) 
//     {
//         case 116 : //F5 button
//             event.returnValue = false;
            
//             return false;
//         case 82 : //R button
//             if (event.ctrlKey) 
//             {
//                 event.returnValue = false;
                
//                 return false;
//             }
//     }
// }



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
      
    }  
  }
  else{
    console.log('null');
    selectPage(null);
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
    history.pushState('home', 'Selected: home', './home' ),
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



// About
about.addEventListener('click', (e) => {
  e.preventDefault();
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new aboutState),
    history.pushState('about', 'Selected: about', './about' ),
    selectPage('about')
    )  // set page as active if result true
   e.preventDefault();
});



// Hero
hero.addEventListener('click', (e) => {
  e.preventDefault();
  checkIfActivePage(e); // checking if active

  result === true && (
    page.change(new heroState),
    history.pushState('hero', 'Selected: hero', './hero' ),
    selectPage('hero')
    )  // set page as active if result true
   e.preventDefault();
});

