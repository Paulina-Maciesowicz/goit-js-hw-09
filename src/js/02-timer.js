const date = new Date();
const jsBtn = document.querySelector(".js-btn");
jsBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < date) {
      window.alert("Please choose a date in the future");
    }
  },
};

flatpickr(document.querySelector("#datetime-picker"), options);
