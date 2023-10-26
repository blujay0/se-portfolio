/*
By wrapping the code in a DOMContentLoaded event listener, you ensure that the JavaScript code will only execute after all elements in the DOM, including to-top-btn--home, have been fully loaded.
*/
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const toTop = document.querySelector('.to-top-btn');
  const toTopHome = document.querySelector('.to-top-btn--home');


  
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (toTop) {
    toTop.addEventListener('click', scrollToTop);
  }

  if (toTopHome) {
    toTopHome.addEventListener('click', scrollToTop);
  };

  // get date
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = year;
});

// send contact form
function sendEmail(params) {
  const tempParams = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    user_message: document.getElementById("user_message").value,
  };

  emailjs.send("service_b3pbodx", "template_6vpott8", tempParams)
    .then(function(response) {
      alert('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}
