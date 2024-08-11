const horses = ['Secretarit', 'Eclipse', 'Bullet', 'Rocket', 'Flying Fox'];

const refs = {
  raceBtn: document.querySelector('.js-race-btn'),
  winner: document.querySelector('.winner'),
  progress: document.querySelector('.progress'),
  resultTable: document.querySelector('.js-results-table'),
};
let raceCounter = 0;

refs.raceBtn.addEventListener('click', () => {
  const promises = horses.map(horse => run(horse));
  raceCounter += 1;

  updateWinnerField();
  updateProgressField(`Заїзд почався ставки не приймаються`);
  determineWinner(promises);
  waitForAllHorses(promises);
});

function waitForAllHorses(promises) {
  //Promise.all() повертає масив всіх виконаних промісів
  Promise.all(promises).then(x => {
    updateProgressField(`Заїзд закінчен, приймаємо ставки`);
  });
}

function determineWinner(promises) {
  //Promise.race();  цей метод промісу повертає проміс який виконався швидше за інших
  Promise.race(promises).then(({ horse, time }) => {
    updateWinnerField(`Переміг ${horse}, фінішував за ${time} часу`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function updateWinnerField(message) {
  refs.winner.textContent = message;
}

function updateProgressField(message) {
  refs.progress.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;

  refs.resultTable.insertAdjacentHTML('beforeend', tr); // помилка із за цього(треба розібратись чтому не иалюється таблиця ((закінчив на 1:52)))
}

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
