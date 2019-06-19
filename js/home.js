// Home State
export const homeState = function() {
  
  
  document.querySelector('#heading').textContent = 'Home';
  document.querySelector('#content').innerHTML = `
  <div class="container">
  <h2 id="home-title">Home</h2>
    <p id="title">Just a simple home page, welcome to my sandbox. <br/>
    The page contains State Pattern, so be aware that it violates browser-back-button which therefore won't work here - use our navigation instead!</p> 
  </div>
  `;

  DomLoad; // init animations

};



const DomLoad = document.addEventListener('DOMContentLoaded', () => {

  // starting layout
  document.body.style.backgroundColor = "white";

  document.querySelector('.navbar').style.transform = "translateY(-100px)";
  
  document.querySelector('#home-title').style.transform = "translateX(-100px)";
  document.querySelector('#home-title').style.opacity = "0";

  document.querySelector('#title').style.transform = "translateX(-100px)";
  document.querySelector('#title').style.opacity = "0";



  // 500ms delay
  setTimeout(function(){
    document.body.style.transition = "150ms all ease-in"
    document.body.style.backgroundColor = "white";


    const navbarCss = `
      transform: translatey(0);
      transition: 1s all ease-in-out;
      transition-delay: 500ms;
    `;
    document.querySelector('.navbar').style.cssText = navbarCss;


    const headerCss = `
      transform: translatex(0);
      opacity: 1; 
      transition: 200ms all ease-in-out;
    `;
    document.querySelector('#home-title').style.cssText = headerCss;


    const titleCss = `
      transform: translatex(0);
      opacity: 1;
      transition: 200ms all ease-in-out;
      transition-delay: 500ms;
    `;
    document.querySelector('#title').style.cssText = titleCss;
  }, 500);
  console.log('Dom start');
})