
// heropage1 State
export const heroPage1 = function() {

  // stop page loading on nav link click
  document.querySelector('#home').addEventListener('click', function(){
    clearInterval(x);
  });
  document.querySelector('#hero').addEventListener('click', function(){
    clearInterval(x);
  });
  document.querySelector('#about').addEventListener('click', function(){
    clearInterval(x);
  });


  let dom = `
  <button class="back-btn-to-main btn btn-primary">Back</button>
  <div class="body-page1">
  <div class="open">
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
  <section>
    <div class="header">
      <h2 class="logo">Your Logo</h2>
      <ul>
        <li>
          <a href="#" class="active">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="bannerText">
      <h2>Think Creative</h2><br>
      <h3>And Make Innovative Design</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <a href="#">Read More</a>
    </div>
    
    <ul class="sci">
      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
    </ul>
    <div class="element1"></div>
    <div class="element2"></div>
  </section>
</div>
`;


  document.querySelector('#heading').textContent = 'hero page 1';


  let count = 99;
  document.querySelector('#content').innerHTML = `
    <div style="height: 100vh; background: black;">
      <h2 style="color: white">${count+1}</h2>
    </div>
    `;



  var x = setInterval(function() {
   
    document.querySelector('#content').innerHTML = `
    <div style="height: 100vh; background: black;">
      <h2 style="color: white">${count}</h2>
    </div>
    `;

    count = count - 1;
    console.log(count);
    if (count < 0) {
      clearInterval(x);
      document.querySelector('#content').innerHTML = dom;

      document.querySelector('.back-btn-to-main').addEventListener('click', function(e){

        console.log('change to hero somehow');
    
        e.preventDefault();
      })
    }

  }, 25)








};

