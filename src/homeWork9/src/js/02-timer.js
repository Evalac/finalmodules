import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('input[type="text"]'),
  buttonEl: document.querySelector('button[data-start]'),
};

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

class SaleTimer {
  constructor() {
    this.intervalID = null;
    this.isActive = false;
  }

  timerOn() {
    const selectedDate = value.selectedDates[0].getTime();
    console.log(selectedDate);

    this.inervalID = setInterval(() => {
      const startTime = Date.now();
      console.log(this.convertMs(selectedDate - startTime));
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

const timer = new SaleTimer();

refs.buttonEl.addEventListener('click', timer.timerOn.bind(timer));
