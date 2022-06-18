const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    const clickedBtn = event.currentTarget;
    if (clickedBtn.classList.contains('decrease')) {
      count -= 1;
    } else if (clickedBtn.classList.contains('increase')) {
      count += 1;
    } else {
      count = 0;
    }
    counter.textContent = count;
    if (count < 0) {
      counter.style.color = 'red';
    } else if (count > 0) {
      counter.style.color = 'green';
    } else {
      counter.style.color = '#343a40';
    }
  });
});
