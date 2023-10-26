/*
By wrapping the code in a DOMContentLoaded event listener, you ensure that the JavaScript code will only execute after all elements in the DOM, including to-top-btn--home, have been fully loaded.
*/
// Define the sendEmail function
function sendEmail() {
  // Your code for sending the email
  const tempParams = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    user_message: document.getElementById("user_message").value,
  };

  emailjs.send("service_b3pbodx", "template_6vpott8", tempParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);

      // Clear the form fields
      document.getElementById("user_name").value = '';
      document.getElementById("user_email").value = '';
      document.getElementById("user_message").value = '';
    }, 
    function(error) {
      console.log('FAILED...', error);
    });
}

// The rest of your code
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const toTop = document.querySelector('.to-top-btn');
  const toTopHome = document.querySelector('.to-top-btn--home');
  const contactForm = document.getElementById("contact-form");

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
  }

  // get date
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = year;

  // Add an event listener to the submit button
  const contactBtn = document.getElementById("contact-btn");

  contactBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the form is valid
    if (contactForm.checkValidity()) {
      // If the form is valid, call the sendEmail function
      sendEmail();
    } else {
      // If the form is not valid, you can display an error message or take any other appropriate action.
      // For example, you can add an error message to your HTML to inform the user.
      // Create an element for the error message and add it to the form container.
      const errorMessage = document.createElement('p');
      errorMessage.textContent = "⚠️ Please fill out all required fields.";
      errorMessage.className = 'error-message';

      // Check if an error message already exists and remove it before adding the new one
      const existingErrorMessage = contactForm.querySelector('.error-message');
      if (existingErrorMessage) {
        contactForm.removeChild(existingErrorMessage);
      }

      contactForm.appendChild(errorMessage);
    }
  });
});

