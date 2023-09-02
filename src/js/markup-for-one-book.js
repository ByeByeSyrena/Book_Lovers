(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-pop-up-open]'),
    closeModalBtn: document.querySelector('[data-modal-pop-up-close]'),
    modal: document.querySelector('[data-modal-pop-up]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
