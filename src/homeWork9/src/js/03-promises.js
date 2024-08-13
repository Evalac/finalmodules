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
    createPromise(i + 1, currentDealy)
      .then(result => {
        console.log(
          `✅ Проміс ${i + 1} виконано через ${currentDealy} мс: ${result}`
        );
      })
      .catch(error => {
        console.log(
          `❌ Проміс ${i + 1} не виконано через ${currentDealy} мс: ${error}`
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
        resolve('проміс виконано');
      }
      reject('помилка');
    }, delay);
  });
}

// трекба зробити щоб в параметри записувались значення з інпутів, скоріш за все на них треба відслідковуння родії зробити, може зробити відслідковування подій за допомогою делегування
