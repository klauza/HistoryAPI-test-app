// import subpages
import { heroPage1 } from './hero-pages/heroPage1.js';




// Contact State
export const heroState = function(page) {
    
  document.querySelector('#heading').textContent = 'Hero pages';
  
  
  
  const injectLoader = `<img src="https://www.airport-budapest.info/images/loading.gif" />`;
  

  // State for sub pages of Hero page
  let currentSubState;
  const PageSubState = function() {
  
    this.change = function(state) {
      currentSubState = state;
    }
  };
  const subPage = new PageSubState();






  loader()
    .then(res => console.log(res) )
    .catch(err => console.log(err));



  // -------- FUNCTIONS -------- //

  window.addEventListener('popstate', e => {

    if (e.state !== null) {
      console.log('not hero state null');
      selectBoxHero(e.state.id);
      if(window.history.state == "./hero/1"){
        
        subPage.change(new heroPage1);
      } else{
        console.log('null hero');
        selectBoxHero(null);
      }
   }
  });

  // LOADER
  async function loader(){
    
    const promise = new Promise((resolve, reject) => {
      document.querySelector('#content').innerHTML = injectLoader;  // Puts loader at start
    

      let objImg = new Image();           // init Image [biggest one]
      objImg.src = '../media/test.jpg';   // init src of Image
      
      objImg.onload = function() {        // when image is loaded.. show the page


        // PAGE LOADED!
        setTimeout(function(){
          console.log('Hero loaded');
          // Inject Dom
          animateAndInjectHeroPage();

          // Card links
          const cardOne = document.getElementById('card-1');  
          
          cardOne.addEventListener('click', (e) => {
            selectBoxHero('hero/1');
            document.querySelectorAll('.nav-item')[1].classList.remove('active'); // remove active from hero main
          
            history.pushState('hero/1', 'Selected: hero/1', './hero/1' );
            subPage.change(new heroPage1);
            
            e.preventDefault();
          })

        }, 250);
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

  // ANIMATION entry
  const animateAndInjectHeroPage = () => {
    
    injectDom(true);  // inject hero content after images will be loaded

    document.querySelector('#content').style.transform = 'translateX(100px)';
    document.querySelector('#content').style.opacity = '0';
    document.querySelector('#content').style.transition = 'none';

    setTimeout(function(){
      document.querySelector('#content').style.opacity = '1';
      document.querySelector('#content').style.transform = 'translateX(0)';
      document.querySelector('#content').style.transition = '500ms all ease';

    }, 500);
  }

  // DOM FUNCTION INJECT
  const injectDom = function(bool){
  
    if(bool == true){
    document.querySelector('#content').innerHTML = `
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
    `;
    } else {
      console.log('bool is false');
    }
  }

  function selectBoxHero(id){
    let links = Array.from(document.getElementsByClassName('hero-link'));
    console.log(links);
    
    links.forEach(b => {
      b.classList.toggle('selected', b.id === id);
    });
  }

};


