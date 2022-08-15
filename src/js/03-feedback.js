const throttle = require('lodash.throttle'); 

const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.querySelector('[name="email"]');
const message = feedbackForm.querySelector('[name="message"]');

const storedMessage = localStorage.getItem('feedback-form-state');
if(storedMessage){
    const storedObject = JSON.parse(storedMessage);
    email.value = storedObject.email;
    message.value = storedObject.message;
}
else{
    feedbackForm.reset();
}

feedbackForm.addEventListener('input', throttle(inputCallback, 500));
feedbackForm.addEventListener('submit', submitCallback);

function inputCallback(){
    //console.log('inputCallback');
    const formData = {
        email:  email.value,
        message: message.value
    }
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitCallback(event){
    event.preventDefault();
    //console.log('submitCallback');
    const formData = {
        email:  email.value,
        message: message.value
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
}
