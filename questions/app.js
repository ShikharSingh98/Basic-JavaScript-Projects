// Solution-1
// --------------------
// const toggleBtns = document.querySelectorAll('.question-toggle-btn');

// toggleBtns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-toggle-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (question) {
      question.classList.remove('show-text');
    });
    question.classList.toggle('show-text');
  });
});
