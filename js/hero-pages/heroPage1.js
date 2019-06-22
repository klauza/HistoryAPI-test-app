export const heroPage1 = function() {

  // stop page loading on nav link click
  document.querySelector('#home').addEventListener('click', function(){
    clearInterval(initPage);
  });
  document.querySelector('#hero').addEventListener('click', function(){
    clearInterval(initPage);
  });
  document.querySelector('#about').addEventListener('click', function(){
    clearInterval(initPage);
  });


  // back
  document.onkeyup = function() 
  {
      switch (event.keyCode) 
      {
        case 27 :  //esc
        clearInterval(initPage);
        document.querySelector('#hero').click();

        case 8 :  // backspace
        clearInterval(initPage);
        document.querySelector('#hero').click();
      }
  }




  let dom = `
  <div class="content-page3">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Cloth Bar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hoodies</a>
          </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">T-shirts</a>
          </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sweaters</a>
          </li>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jeans</a>
          </li>
         
        </ul>
     
      </div>
    </div>
  </nav>

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${location.origin}/media/1.jpg" class="d-block w-100" alt="1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Newfest set</h5>
            <p>Check out the amazing life saver hoodie</p>
            <button type="button" class="btn btn-outline-light">Go check</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${location.origin}/media/2.jpg" class="d-block w-100" alt="2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Archangelic blue</h5>
            <p>It shows the real light</p>
            <button type="button" class="btn btn-outline-light">Explore</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="${location.origin}/media/3.jpg" class="d-block w-100" alt="3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Savage</h5>
            <p>Exclusive hoodie with new technology</p>
            <button type="button" class="btn btn-outline-light">Check it out</button>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  </div>
</div>
`;


  document.querySelector('#heading').textContent = '';


  let count = 1;
  document.querySelector('#content').innerHTML = `
    <div style="height: 100vh; background: black;">
      <h2 style="color: white">${count}</h2>
    </div>
    `;



  let initPage = setInterval(function() {
   
    document.querySelector('#content').innerHTML = `
    <div style="height: 100vh; background: black;">
      <h2 style="color: white">${count}</h2>
    </div>
    `;

    count--;
    console.log(count);
    if (count < 1) {
      clearInterval(initPage);
      document.querySelector('#content').innerHTML = dom;

      
    }

  }, 500);


  
};

