import { isEscEvent } from './utils.js';

export const setModal = (modalOpenElement, modalCloseElement, modalWindow) => {
  const closeModal = () => {
    modalWindow.classList.remove('modal--show');
    document.removeEventListener('keydown', modalKeydownHandler);
  }

  const modalCloseHandler = () => {
    closeModal();
  }

  const modalKeydownHandler = (evt) => {
    if (isEscEvent(evt)) {
      closeModal();
    }
  }

  const modalOpenHandler = (evt) => {
    evt.preventDefault();
    modalWindow.classList.add('modal--show');
    document.addEventListener('keydown', modalKeydownHandler)
  }

  if (modalOpenElement && modalCloseElement && modalWindow) {
    modalOpenElement.addEventListener('click', modalOpenHandler);
    modalCloseElement.addEventListener('click', modalCloseHandler);
  }
}
