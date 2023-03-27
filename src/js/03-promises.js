import Notiflix from 'notiflix';
const form = document.querySelector('.form');

function createPromise(number, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ number, delay });
      } else {
        reject({ number, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  console.log(delay.value, step.value, amount.value);
  for (let i = 1; i <= amount.value; i++) {
    const convertNumberDelay = parseInt(delay.value);
    const convertNumberStep = parseInt(step.value);
    const promiseDelay = convertNumberDelay + convertNumberStep * (i - 1);
    createPromise(i, promiseDelay)
      .then(({ number, delay }) => {
        console.log('✅ Fulfilled promise ${number} in ${delay}ms');
        Notiflix.Notify.success('✅ Fulfilled promise ${number} in ${delay}ms');
      })
      .catch(({ number, delay }) => {
        console.log('❌ Rejected promise ${number} in ${delay}ms');
        Notiflix.Notify.failure('❌ Rejected promise ${number} in ${delay}ms');
      });
  }
});
