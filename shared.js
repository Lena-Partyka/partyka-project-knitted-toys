var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var itemCta = document.querySelector(".main-nav__item--cta")
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

itemCta.addEventListener('click', function () {
  //modal.style.display = 'block';
  //backdrop.style.display = 'block';
  modal.classList.add('open');
  backdrop.classList.add('open');
});

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open')
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal)
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open')
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add ('open');
  backdrop.classList.add('open')
});


