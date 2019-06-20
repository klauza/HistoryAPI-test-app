// About State
export const aboutState = function() {
  document.querySelector('#heading').textContent = '';
  document.querySelector('#content').innerHTML = `
    <div class="container text-center">
      <p>This is about page</p>
      <p>Images for this page were taken from <a href="https://www.freepik.com">www.freepik.com</a></p>
    </div>
`;
};

