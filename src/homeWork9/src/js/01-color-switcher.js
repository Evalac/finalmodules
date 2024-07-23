const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', () => {
  console.log('satrt');
});

refs.stopBtn.addEventListener('click', () => {
  console.log('stop');
});
