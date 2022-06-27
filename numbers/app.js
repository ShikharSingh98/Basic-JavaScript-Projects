const items = [...document.querySelectorAll('.number')];

function updateCount(el) {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(function () {
    initialValue += increment;
    if (initialValue <= value) {
      el.textContent = `${initialValue}+`;
    } else {
      clearInterval(increaseCount);
    }
  }, 1);
}

items.forEach((item) => {
  updateCount(item);
});
