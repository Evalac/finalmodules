const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = currentTime - startTime;
      const timeToFunction = getTimeComponents(timeDifference);
      console.log(timeToFunction);
    }, 1000);
  },
};

timer.start();

function getTimeComponents(time) {
  const days = Math.floor(time / 1000 / 60 / 60 / 24);
  const hours = Math.floor(time / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const seconds = Math.floor(time / 1000) % 60;
  return { days, hours, minutes, seconds };
}
