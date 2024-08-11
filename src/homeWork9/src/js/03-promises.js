const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

console.log(refs.btnSubmit);

refs.btnSubmit.addEventListener('click', () => {
  console.log('click');
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

createPromise(1, 2000)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

// трекба зробити щоб в параметри записувались значення з інпутів, скоріш за все на них треба відслідковуння родії зробити, може зробити відслідковування подій за допомогою делегування
