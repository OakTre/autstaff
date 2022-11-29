// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import openMenu from './modules/openMenu';
import slider from './modules/slider';
import accordion from './modules/accordion';
import validation from './modules/validation';
import phoneMask from './modules/inputmask';
import fixedFeautureNav from './modules/fixedFeautureNav';
import resultAnimation from './modules/resultAnimation';
import closePreloader from './modules/closePreloader';
import blocksReveal from './modules/animatedBlocks';

window.addEventListener("load", () => {
  const prelaoder = document.querySelector(".preloader");

  setTimeout(() => {
    prelaoder.classList.add("is-hidden");
    closePreloader();
  }, 100);
});

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();
  openMenu();
  slider();
  accordion();
  validation();
  phoneMask();
  fixedFeautureNav();
  resultAnimation();
  blocksReveal();
});
