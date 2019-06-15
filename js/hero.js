// Contact State

export const heroState = function(page) {
  
  document.querySelector('#heading').textContent = 'Hero page';
  
 
  const injectLoader = `
  <img src="https://www.airport-budapest.info/images/loading.gif" />`;
  

  const injectDom = `
  <p>This is hero page</p>
  
  <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">

  
  <div class="row">
  <div class="col-sm">
    <div class="card col-sm" style="width: 18rem;">
      <img src="../media/test.jpg" class="card-img-top img-test-1" alt="...">
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
  

  // LOADER
  async function loader(){
    
  const promise = new Promise((resolve, reject) => {
    document.querySelector('#content').innerHTML = injectLoader;

    let objImg = new Image();
    objImg.src = '../media/test.jpg';
    objImg.onload = function() { 
      setTimeout(function(){ 
      console.log('Dom loaded');
      document.querySelector('#content').innerHTML = injectDom;
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

