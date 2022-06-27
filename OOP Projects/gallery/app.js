function getElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  }

  throw new Error(`Please check "${selector}" selector, no such element exists`);
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.mainImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImgs = getElement('.modal-images');
  this.closeBtn = getElement('.close-modal');
  this.prevBtn = getElement('.btn-prev');
  this.nextBtn = getElement('.btn-next');

  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImg, list) {
  this.modal.classList.add('show-modal');
  this.setMainImg(selectedImg);
  const markup = list
    .map((item) => `<img src=${item.src} title=${item.title} data-id=${item.dataset.id} alt=${item.alt} class="modal-image ${selectedImg.dataset.id === item.dataset.id && 'selected'}" />`)
    .join('');
  this.modalImgs.innerHTML = markup;
  this.closeModal = this.closeModal.bind(this);
  this.closeBtn.addEventListener('click', this.closeModal);
};

Gallery.prototype.setMainImg = function (selectedImg) {
  this.mainImg.src = selectedImg.src;
  this.imageName.textContent = selectedImg.title.toUpperCase();
};

Gallery.prototype.closeModal = function () {
  console.log('hello');
  this.modal.classList.remove('show-modal');
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
