import { removeNoJs } from "./modules/no-js.js";
import { setModal } from "./modules/modal.js";

const addProfileLinkElement = document.querySelector('.add-profile__link');
const businessRatesModalElement = document.querySelector('#business-rates');
const closeModalButtonElement = businessRatesModalElement.querySelector('.modal__button');

removeNoJs();
setModal(addProfileLinkElement, closeModalButtonElement, businessRatesModalElement);
