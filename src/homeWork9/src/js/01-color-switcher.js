const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

console.log(refs.startBtn);

class ChangeColor {
  constructor() {
    this.IsActive = false;
    this.inervalID = null;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = false;
  }

  start() {
    if (this.IsActive) {
      return;
    }
    this.inervalId = setInterval(() => {
      getRandomHexColor();
      const color = getRandomHexColor();
      document.body.style.backgroundColor = color;
    }, 1000);
    this.IsActive = true;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }
  stop() {
    clearInterval(this.inervalId);
    this.IsActive = false;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
}

const change = new ChangeColor({});
console.log(change);

refs.startBtn.addEventListener('click', change.start.bind(change));
refs.stopBtn.addEventListener('click', change.stop.bind(change));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
