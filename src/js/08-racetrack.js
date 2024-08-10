const horses = ['Secretarit', 'Eclipse', 'Bullet', 'Rocket', 'Flying Fox'];

const refs = {
  raceBtn: document.querySelector('.js-race-btn'),
  winner: document.querySelector('.winner'),
  progress: document.querySelector('.progress'),
  resultTable: document.querySelector('.js-results-table > tbody'),
};

refs.raceBtn.addEventListener('click', () => {
  const promises = horses.map(horse => run(horse));
  updateWinnerField();
  updateProgressField(`Заїзд почався ставки не приймаються`);
  //Promise.race();  цей метод промісу повертає проміс який виконався швидше за інших
  Promise.race(promises).then(({ horse, time }) => {
    updateWinnerField(`Переміг ${horse}, фінішував за ${time} часу`);
    updateResultsTable({ horse, time });
  });

  //Promise.all() повертає масив всіх виконаних промісів
  Promise.all(promises).then(x => {
    updateProgressField(`Заїзд закінчен, приймаємо ставки`);
  });
});

function updateWinnerField(message) {
  refs.winner.textContent = message;
}

function updateProgressField(message) {
  refs.progress.textContent = message;
}

function updateResultsTable({ horse, time }) {
  const tr = `<tr><td>0</td><td>${horse}</td><td>${time}</td></tr>`;

  refs.resultTable.innerHTML('beforeend', tr); // помилка із за цього(треба розібратись чтому не иалюється таблиця ((закінчив на 1:52)))
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
