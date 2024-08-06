import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('input[type="text"]'),
  buttonEl: document.querySelector('button[data-start]'),
};

const selectedDates = [];
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const value = flatpickr(refs.inputEl, options);

refs.buttonEl.addEventListener('click', () => {
  const selectedDate = value.selectedDates[0].getTime();
  console.log(selectedDate);

  const inervalID = setInterval(() => {
    const startTime = Date.now();
    console.log(convertMs(startTime - selectedDate));

    // console.log('startTime: ', startTime);
    // const timeDifference = addTime - startTime;
    // console.log(timeDifference);
    // console.log(addTime);
  }, 1000);

  // console.log(value);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
