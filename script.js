// script.js
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learn-more-btn');
  learnMoreBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent!');
  });
});