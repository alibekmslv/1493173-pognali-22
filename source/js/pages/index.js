import { setModal } from "../modules/modal.js";


export const indexPage = () => {
  const addProfileLinkElement = document.querySelector('.add-profile__link');
  const businessRatesModalElement = document.querySelector('#business-rates');
  const closeModalButtonElement = businessRatesModalElement.querySelector('.modal__button');

  setModal(addProfileLinkElement, closeModalButtonElement, businessRatesModalElement);
};
