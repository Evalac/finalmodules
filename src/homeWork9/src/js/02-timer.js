import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';

const refs = {
  inputEl: document.querySelector('input[type="text"]'),
  buttonEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondEl: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() <= Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      refs.buttonEl.disabled = true;
    } else {
      refs.buttonEl.disabled = false;
    }
  },
};

const value = flatpickr(refs.inputEl, options);

class SaleTimer {
  constructor() {
    this.intervalID = null;
    this.isActive = false;
    refs.buttonEl.disabled = true;
  }

  timerOn() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    const selectedDate = value.selectedDates[0].getTime();

    this.inervalID = setInterval(() => {
      const startTime = Date.now();
      const timeDifference = selectedDate - startTime;
      const time = this.convertMs(timeDifference);
      updateTimerFace(time);
    }, 1000);
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }
}

const timer = new SaleTimer({ OnTick: updateTimerFace });
console.log(timer);

refs.buttonEl.addEventListener('click', timer.timerOn.bind(timer));

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondEl.textContent = `${seconds}`;
}
