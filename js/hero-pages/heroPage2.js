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
    <div class="gif-container">
      <img class="gif" src="${location.origin}/media/stars.gif" />
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
      document.querySelector('#content').innerHTML = dom2;

  
    }

  }, 500);


  
};

