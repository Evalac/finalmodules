const promise = new Promise((resolve, reject) => {
  const canFulfille = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfille) {
      resolve('promise виконан успішно');
    }

    reject('Promise виконан з помилкою');
  }, 1000);
});

// console.log(promise);

promise.then(
  result => {
    console.log(`${result}`);
  },
  error => {
    console.log(`${error}`);
  }
);
