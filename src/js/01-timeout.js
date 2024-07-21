const logMessage = () => {
  console.log('Лог при виклику callback-функціїї через 3 секунди');
};

console.log('до виклику setTimeout');

setTimeout(() => {
  console.log('в середині функціїї setTimeout');
}, 2000);

console.log('після виклику setTimeout');
for (let i = 0; i < 10000; i++) {
  console.log(i);
}
