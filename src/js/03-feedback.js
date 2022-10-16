import { throttle } from 'lodash';
import { save, load } from './storage.js';

const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK = 'feedback-form-state';

let formInfo = {};
completedSaved();

feedbackForm.addEventListener('input', throttle(onInputChange, 500));
feedbackForm.addEventListener('submit', onSubmitChange);

function onInputChange(evt) {
  formInfo[evt.target.name] = evt.target.value;
  save(FEEDBACK, formInfo);
}

function onSubmitChange(evt) {
  evt.preventDefault();

  if (!feedbackForm['email'].value || !feedbackForm['message'].value) {
    alert('Будь ласка, заповніть всі поля форми ');
    return;
  }
  console.log(formInfo);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
  formInfo = {};
}

function completedSaved() {
  const saveInfo = load(FEEDBACK);
  if (saveInfo) {
    const keys = Object.keys(saveInfo);
    keys.map(key => {
      formInfo[key] = saveInfo[key];
      feedbackForm[key].value = saveInfo[key];
    });
  }
}
