import { heroPage1 } from './hero-pages/heroPage1.js';




// Contact State
export const heroState = function(page) {
    
  document.querySelector('#heading').textContent = 'Hero pages';
  
 
  const injectLoader = `
  <img src="https://www.airport-budapest.info/images/loading.gif" />`;
  

  const injectDom = `
  <p>This is hero page</p>
  <p> big, 14mb picture over here and page is waiting for pictures' load</p>
  <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">

  
  <div class="row">
  <div class="col-sm">
    <div class="card col-sm" style="width: 18rem;">
      <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a id="card-1" class="nav-link" href="#/hero/hero-page1">Link</a>
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
  `;
  

  // State for sub pages of Hero page
  let currentSubState;
  const PageSubState = function() {
    //currentSubState = new homeState(this);
  
    this.change = function(state) {
      currentSubState = state;
    }
  };
  const subPage = new PageSubState();





  // LOADER
  async function loader(){
    
  const promise = new Promise((resolve, reject) => {
    document.querySelector('#content').innerHTML = injectLoader;  // Puts loader

    let objImg = new Image(); // init Image [biggest one]
    objImg.src = '../media/test.jpg';  // init src of Image
    
    objImg.onload = function() {
      
      setTimeout(function(){
        console.log('Hero loaded');
        document.querySelector('#content').innerHTML = injectDom; // inject hero content after images will be loaded


    
  
       
        const cardOne = document.getElementById('card-1');  // target link
        
        cardOne.addEventListener('click', (e) => {
          document.querySelectorAll('.nav-item')[1].classList.remove('active'); // remove active from hero main
         
          subPage.change(new heroPage1);
        })

        animateHeroPage();
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


loader()
  .then(res => console.log('1') )
  .catch(err => console.log(err));




};


 // ANIMATION
 const animateHeroPage = () => {
  const testQuery = document.querySelector('.img-test-1');
  console.log(testQuery);
}