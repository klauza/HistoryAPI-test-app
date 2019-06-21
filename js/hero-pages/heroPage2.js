export const heroPage2 = function() { 

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




  let dom2 = `
  <div class="heropage2">
  <button class="back-btn-to-main btn btn-primary">Back</button>
    <nav>
      <ul class="list-parent">
        <li class="list-child"><a href="#">Link-1</a></li>
        <li class="list-child"><a href="#">Link-2</a></li>
        <li class="list-child"><a href="#">Link-3</a></li>
        <li class="list-child"><a href="#">Link-4</a></li>
        <li class="list-child"><a href="#">Link-5</a></li>
      </ul>
    </nav>


    <div class="images">
      <img src="https://picsum.photos/id/125/400/300" alt="pic1">
      <img src="https://picsum.photos/id/114/400/300" alt="pic2">
    </div>

    <div class="between-images">
      <p>Hello guest</p>
    </div>

    <div class="articles">
      <div class="article-left">
        <h4>Title</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia qui voluptate cupiditate accusamus voluptatum non aliquid perspiciatis odio obcaecati vero eos id quisquam ut, molestias molestiae quasi, expedita quo consequatur nisi soluta rerum ipsam vel laboriosam illum. Id quidem suscipit ipsum itaque minima dolores velit. Aliquam, magnam. Unde vero consectetur distinctio laborum pariatur, omnis iure qui necessitatibus quia repellendus esse, facere neque aut velit quasi autem voluptatibus laudantium praesentium sequi.  </span>
      </div>
      <div class="article-right">
        <h4>Title</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia qui voluptate cupiditate accusamus voluptatum non aliquid perspiciatis odio obcaecati vero eos id quisquam ut, molestias molestiae quasi, expedita quo consequatur nisi soluta rerum ipsam vel laboriosam illum. Id quidem suscipit ipsum itaque minima dolores velit. Aliquam, magnam. Unde vero consectetur distinctio laborum pariatur, omnis iure qui necessitatibus quia repellendus esse, facere neque aut velit quasi autem voluptatibus laudantium praesentium sequi.  </span>
      </div>
    </div>

    <footer>
      <p>footer ©</p>
    </footer>
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
      document.querySelector('#content').innerHTML = dom2;

      // go back button
      document.querySelector('.back-btn-to-main').addEventListener('click', function(e){
        document.querySelector('#hero').click();
        e.preventDefault();
      })
    }

  }, 500);


  
};

