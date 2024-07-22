const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = currentTime - startTime;
      const { days, hours, minutes, seconds } =
        getTimeComponents(timeDifference);
      console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / 1000 / 60 / 60 / 24));
  const hours = pad(Math.floor(time / 1000 / 60 / 60) % 24);
  const minutes = pad(Math.floor(time / 1000 / 60) % 60);
  const seconds = pad(Math.floor(time / 1000) % 60);
  return { days, hours, minutes, seconds };
}
