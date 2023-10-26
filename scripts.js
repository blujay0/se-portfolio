// Define the sendEmail function with contactForm as a parameter
function sendEmail(contactForm) {
  // send email
  const tempParams = {
    user_name: contactForm.querySelector("#user_name").value,
    user_email: contactForm.querySelector("#user_email").value,
    user_message: contactForm.querySelector("#user_message").value,
  };

  emailjs.send("service_b3pbodx", "template_6vpott8", tempParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);

      // Clear the form fields
      contactForm.querySelector("#user_name").value = '';
      contactForm.querySelector("#user_email").value = '';
      contactForm.querySelector("#user_message").value = '';

      // Create a success message element
      const successMessage = document.createElement('p');
      successMessage.textContent = "✔️ Message sent successfully!";
      successMessage.className = 'success-message';

      // Create a container for messages
      const messageContainer = document.createElement('div');
      messageContainer.className = 'message-container';

      // Check if any message container already exists and remove it before adding the new one
      const existingMessageContainer = contactForm.querySelector('.message-container');
      if (existingMessageContainer) {
        contactForm.removeChild(existingMessageContainer);
      }

      // Add the success message to the message container
      messageContainer.appendChild(successMessage);

      // Add the message container to the form container
      contactForm.appendChild(messageContainer);

      // Remove message container after 2 secs
      setTimeout(() => {
        contactForm.removeChild(messageContainer);
      }, 2000);
    }, 
    function(error) {
      console.log('FAILED...', error);
    });
}

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
  const contactBtn = contactForm.querySelector("#contact-btn");

  contactBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the form is valid
    if (contactForm.checkValidity()) {
      // If form is valid, call the sendEmail function with contactForm as a parameter
      sendEmail(contactForm);
    } else {
      // if form is not valid, display an error message
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

      // remove error message after 2 secs
      setTimeout(() => {
        const errorMessageToRemove = contactForm.querySelector('.error-message');
        if (errorMessageToRemove) {
          contactForm.removeChild(errorMessageToRemove);
        }
      }, 2000);    
    }
  });
});