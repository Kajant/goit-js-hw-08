'use strict';
import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('input', throttle(event => {
    const feedbackContent = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackContent));
}, 500));

window.addEventListener('load', () => {
  const feedbackContent = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (feedbackContent) {
    emailInput.value = feedbackContent.email;
    messageInput.value = feedbackContent.message;
  }
});

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log({ email: emailInput.value, message: messageInput.value });
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
});