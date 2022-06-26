function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`Please check ${selector} selector, no such element exists`);
}

function Counter(element, initalValue) {
  this.element = element;
  this.value = initalValue;
  this.decreaseBtn = this.element.querySelector('.decrease');
  this.resetBtn = this.element.querySelector('.reset');
  this.increaseBtn = this.element.querySelector('.increase');
  this.count = this.element.querySelector('.count');
  this.count.textContent = this.value;
  //  bind this to all function
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increase = this.increase.bind(this);
  this.increaseBtn.addEventListener('click', this.increase.bind(this));
  this.resetBtn.addEventListener('click', this.reset.bind(this));
  this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
}

Counter.prototype.decrease = function () {
  this.value--;
  this.count.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.count.textContent = this.value;
};
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.count.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);

const secondCounter = new Counter(getElement('.second-counter'), 200);
