// Home State
export const homeState = function() {
  
  window.location.hash = '#';
  document.querySelector('#heading').textContent = 'Home';
  document.querySelector('#content').innerHTML = `
  <p id="title">This is home page, welcome</p>
  `;

  DomLoad; // init animations

};



const DomLoad = document.addEventListener('DOMContentLoaded', () => {

  // starting layout
  document.body.style.backgroundColor = "black";

  document.querySelector('.navbar').style.transform = "translateY(-100px)";
  
  document.querySelector('#heading').style.transform = "translateX(-100px)";
  document.querySelector('#heading').style.opacity = "0";

  document.querySelector('#title').style.transform = "translateX(-100px)";
  document.querySelector('#title').style.opacity = "0";



 
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
    document.querySelector('#heading').style.cssText = headerCss;


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