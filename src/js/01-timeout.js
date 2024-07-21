// const logMessage = () => {
//   console.log('Лог при виклику callback-функціїї через 3 секунди');
// };

// console.log('до виклику setTimeout');

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('в середині функціїї setTimeout');
//   },
//   2000,
//   'dsads'
// );

// console.log('після виклику setTimeout');
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }

//як знімати settimeout()

const logger = time => {
  console.log(`Лог через ${time}, тому що не відмінили таймаут`);
};

const timeId = setTimeout(logger, 2000, 2000); // першим передаэться функція яку відкладаємо, другим час, третім і тд. аргументи

const shouldCancelTime = Math.random() > 0.3;
console.log(shouldCancelTime);

if (shouldCancelTime) {
  clearTimeout(timeId);
}

// нижче інтервальний виклик функціїї
const loggerInetr = time => {
  console.log(`Лог кожні ${time} -${Date.now()}`);
};

const timeIdIntert = setInterval(loggerInetr, 3000, 3000);
if (shouldCancelTime) {
  clearInterval(timeIdIntert);
}
