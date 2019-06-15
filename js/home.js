// Home State
export const homeState = function() {
  window.location.hash = '#';
  document.querySelector('#heading').textContent = 'Home';
  document.querySelector('#content').innerHTML = `
  <p>This is home page, welcome</p>
  `;

  
};