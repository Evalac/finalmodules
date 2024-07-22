const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
};

refs.startBtn.addEventListener('click', onStartTimer);
refs.stopBtn.addEventListener('click', onStopTimer);

function onStartTimer() {
  timer.start();
}
function onStopTimer() {
  timer.stop();
}

const timer = {
  inervalID: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    this.inervalID = setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = currentTime - startTime;
      const time = getTimeComponents(timeDifference);
      updateClockFace(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.inervalID);
    this.isActive = false;
  },
};

function pad(value) {
  // функція яка додає 0 перед першим числом якшо вже два числа 0 не додається
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / 1000 / 60 / 60 / 24));
  const hours = pad(Math.floor(time / 1000 / 60 / 60) % 24);
  const minutes = pad(Math.floor(time / 1000 / 60) % 60);
  const seconds = pad(Math.floor(time / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function updateClockFace({ days, hours, minutes, seconds }) {}
