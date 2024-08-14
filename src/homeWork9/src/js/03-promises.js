import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';

const refs = {
  btnSubmit: document.querySelector('button[type="submit"]'),
  formEl: document.querySelector('.form'),
};

const formData = {
  delay: '',
  step: '',
  amount: '',
};

refs.formEl.addEventListener('input', onInputValue);

function onInputValue(evt) {
  if (evt.target.name === 'delay') {
    formData.delay = evt.target.value;
  }

  if (evt.target.name === 'step') {
    formData.step = evt.target.value;
  }

  if (evt.target.name === 'amount') {
    formData.amount = evt.target.value;
  }
}

refs.btnSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  let currentDealy = Number(formData.delay);
  for (let i = 0; i < formData.amount; i++) {
    createPromise(i, currentDealy)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Проміс ${position} виконано через ${delay} `
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Проміс ${position} не виконано через ${delay} `
        );
      });

    currentDealy += Number(formData.step);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

// трекба зробити щоб в параметри записувались значення з інпутів, скоріш за все на них треба відслідковуння родії зробити, може зробити відслідковування подій за допомогою делегування
function solution(string) {
  const result = string.split('').find(letter => letter === ' ' && '');
  if (result) {
    return string;
  } else {
    const index = string
      .split('')
      .findIndex(letter => letter === letter.toUpperCase());

    return string.slice(0, index) + ' ' + string.slice(index);
  }
}

console.log(solution(`camelCasing`));
console.log(solution(`camel Casing`));
console.log(solution(`camel CasingTest`));
console.log(solution(``));
console.log(solution(` `));
