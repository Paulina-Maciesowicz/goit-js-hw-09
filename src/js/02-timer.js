const date = new Date();
const jsBtn = document.querySelector('.js-btn');
jsBtn.disabled = true;
let chooseTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < date) {
      window.alert('Please choose a date in the future');
      jsBtn.disabled = true;
    } else {
      jsBtn.disabled = false;
      chooseTime = selectedDates[0];
    }
  },
};

flatpickr(document.querySelector('#datetime-picker'), options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function counter() {
  const date = new Date();
  const timeObj = convertMs(chooseTime - date);
  document.querySelector('.value-days').innerHTML = addLeadingZero(
    timeObj.days
  );
  document.querySelector('.value-hours').innerHTML = addLeadingZero(
    timeObj.hours
  );
  document.querySelector('.value-minutes').innerHTML = addLeadingZero(
    timeObj.minutes
  );
  document.querySelector('.value-seconds').innerHTML = addLeadingZero(
    timeObj.seconds
  );
}

jsBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    jsBtn.disabled = true;
    const dateNow = new Date();
    if (chooseTime <= dateNow) {
      clearInterval(timerId);
      console.log(`Interval with id ${timerId} has stopped!`);
      return;
    }
    counter();
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
