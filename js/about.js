// About State
export const aboutState = function() {
  document.querySelector('#heading').textContent = '';
  document.querySelector('#content').innerHTML = `
    <div class="container about-page text-center">
      <h2>About</h2>
      
      <ul>  Technology used in this project:
        <li> state module pattern </li>
        <li> Promises </li>
        <li> browser history API </li>
      </ul>
      <p>All images were taken from <a href="https://www.freepik.com">www.freepik.com</a></p>
    </div>
`;
};