const horses = ['Secretarit', 'Eclipse', 'Bullet', 'Rocket', 'Flying Fox'];

console.log('Заїзд почався');
//
//

const promises = horses.map(horse => run(horse));
console.log(promises);

//Promise.race() цей метод промісу повертає проміс який виконався швидше за інших
Promise.race(promises).then(({ horse, time }) => {
  console.log(`Переміг ${horse}, фінішував за ${time} часу`);
});

//Promise.all() повертає масив всіх виконаних промісів
Promise.all(promises).then(x => {
  console.log(x);
  console.log(`Заїзд закінчен, приймаємо ставки`);
});

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRanomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRanomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
