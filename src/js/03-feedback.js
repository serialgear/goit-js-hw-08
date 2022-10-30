import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(input, 500));
refs.form.addEventListener('submit', onSubmit);

const FORMKEY = 'feedback-form-state';

fillInputs();

function input() {
  const data = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(FORMKEY, JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORMKEY)));
  e.currentTarget.reset();
  localStorage.removeItem(FORMKEY);
}

function fillInputs() {
  const savedInfo = localStorage.getItem(FORMKEY);

  if (savedInfo) {
    refs.input.value = JSON.parse(savedInfo).email;
    refs.textarea.value = JSON.parse(savedInfo).message;
  }
}
