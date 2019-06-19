// import hero/subpage link events
import { storeAtag } from './App.js';

   // if click any nav link before page loads, break the animation, because the animation occurs on another page
     // tRY TO DISABLE THE BUTTONS WHEN ANIMATION STARTS
      //  let linksNav = Array.from(document.getElementsByClassName('nav-link'));
      //  console.log(linksNav);

// Contact State
export const heroState = function(page) {
  
  document.querySelector('#heading').textContent = 'Hero';
  
  // inject loader on page init
  const injectLoader = `
  <div class="container">
    <img class="centered" style="text-align:center;" src="https://www.airport-budapest.info/images/loading.gif" />
  </div>
  `;
  

   


  loader(storeAtag)
    .then(res => console.log(res) )
    .catch(err => console.log(err));


    


  // LOADER
  async function loader(storeAtag){
    
    const promise = new Promise((resolve, reject) => {
      document.querySelector('#content').innerHTML = injectLoader;  // Puts loader at start
      

      let objImg = new Image();           // init Image [biggest one]
      objImg.src = '../media/test.jpg';   // init src of Image
      
      objImg.onload = function() {        // when image is loaded.. show the page

    


        // PAGE LOADED!
        setTimeout(function(){   // minimum time for spinner
          console.log('Hero loaded');
          
          // Inject Dom
          animateAndInjectHeroPage();

          // Card links
          const cardOne = document.getElementById('card-1');  
          
          cardOne.addEventListener('click', (e) => {
            storeAtag.click();
            e.preventDefault();
          })
          
        }, 450); 
      }
    });

    const error = false;

    if(!error){
      const res = await promise;  // Wait until the promise is resolved
      return res;
    } else {
      await Promise.reject(new Error('something went wrong'));
    }
  }

  // ANIMATION entry on page init
  const animateAndInjectHeroPage = () => {
    
    injectDom(true);  // inject hero content after images will be loaded

    document.querySelector('#content').style.transform = 'translateY(100px)';
    document.querySelector('#content').style.opacity = '0';
    document.querySelector('#content').style.transition = 'none';

    setTimeout(function(){
      document.querySelector('#content').style.opacity = '1';
      document.querySelector('#content').style.transform = 'translateX(0)';
      document.querySelector('#content').style.transition = '500ms all ease';

    }, 50);
  }



  // DOM FUNCTION INJECT
  const injectDom = function(bool){
  
    if(bool){
    document.querySelector('#content').innerHTML = `
    <div class="container">
      <p>This is hero page</p>

      <div class="row">
        <div class="col-sm">
          <div class="card col-sm" style="width: 18rem;">
            <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a id="card-1" class="hero-link" href="#">Link</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card col-sm" style="width: 18rem;">
            <img src="../media/test.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
        </div>
        
        <div class="col-sm">
          <div class="card col-sm" style="width: 18rem;">
            <img src="../media/test.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
        
        
        <p> big, 14mb picture over here and page is waiting for it to load</p>
        <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">
      </div>
    
    `;
    } else {
      console.log('bool is false');
    }
  }

  // function selectBoxHero(id){
  //   let links = Array.from(document.getElementsByClassName('hero-link'));
  //   console.log(links);
    
  //   links.forEach(b => {
  //     b.classList.toggle('selected', b.id === id);
  //   });
  // }

};


