const date = Date.now();

console.log(date);

setTimeout(() => {
  console.log(date);
  const date1 = Date.now();
  console.log(date1);
  console.log(date - date1);
}, 3000);
