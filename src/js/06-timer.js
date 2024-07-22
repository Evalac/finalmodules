const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  timerEl: document.querySelector('.timer'),
};

// function onStartTimer() {
//   timer.start();
//   console.log('click');
// }
// function onStopTimer() {
//   timer.stop();
//   console.log('clis');
// }

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
      const time = this.getTimeComponents(timeDifference);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.inervalID);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  pad(value) {
    // функція яка додає 0 перед першим числом якшо вже два числа 0 не додається
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
    const hours = this.pad(Math.floor(time / 1000 / 60 / 60) % 24);
    const minutes = this.pad(Math.floor(time / 1000 / 60) % 60);
    const seconds = this.pad(Math.floor(time / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer)); // bind для того щоб привґязати до таймерабо він через this буде ссилатись на дом елемент а не на метод класу

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.timerEl.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
