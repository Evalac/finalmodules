const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  timerEl: document.querySelector('.timer'),
};

refs.startBtn.addEventListener('click', onStartTimer);
refs.stopBtn.addEventListener('click', onStopTimer);

function onStartTimer() {
  timer.start();
  console.log('click');
}
function onStopTimer() {
  timer.stop();
  console.log('clis');
}

class Timer {
  constructor({ onTick }) {
    this.inervalID = null;
    this.isActive = false;
    this.onTick = onTick;
  }
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
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.inervalID);
    this.isActive = false;
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

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

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.timerEl.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
