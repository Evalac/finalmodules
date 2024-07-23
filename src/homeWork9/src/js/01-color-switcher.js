const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

console.log(refs.startBtn);

class ChangeColor {
  constructor() {
    this.IsActive = false;
    this.inervalID = null;
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
  }
  stop() {
    clearInterval(this.inervalId);
    this.IsActive = false;
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
