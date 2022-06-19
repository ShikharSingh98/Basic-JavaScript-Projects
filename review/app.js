const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const authorImg = document.querySelector('.review-author-img');
const authorName = document.querySelector('.review-author-name');
const authorJob = document.querySelector('.review-author-job');
const reviewText = document.querySelector('.review-text');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const surpriseBtn = document.querySelector('.btn-surprise');

//setting first item
let currentItem = 0;

function displayReview(currentItem) {
  const review = reviews[currentItem];
  authorImg.src = review.img;
  authorName.textContent = review.name;
  authorJob.textContent = review.job;
  reviewText.textContent = review.text;
}

// load intial Item
window.addEventListener('DOMContentLoaded', function () {
  displayReview(currentItem);
});

//show next Review
nextBtn.addEventListener('click', function () {
  currentItem += 1;
  if (currentItem >= reviews.length) {
    currentItem = 0;
  }
  displayReview(currentItem);
});

//show prev Review
prevBtn.addEventListener('click', function () {
  currentItem -= 1;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  displayReview(currentItem);
});

//show random review

surpriseBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  displayReview(currentItem);
});
