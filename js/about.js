// About State
export const aboutState = function() {
  document.querySelector('#heading').textContent = 'About';
  document.querySelector('#content').innerHTML = `
    <div class="container">
      <p>This is about page</p>
    </div>
`;
};

