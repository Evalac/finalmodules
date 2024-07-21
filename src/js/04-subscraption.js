import { Modal } from 'bootstrap.native';
const modal = new Modal('#staticBackdrop');

const PROMPT_DALLY = 1000;
const MAX_PROMPT_ATTEMPS = 3;
let pormptCounetr = 0;
let hasSubscripe = false;

const refs = {
  modal: document.querySelector('#staticBackdrop'),
  subscribeBtn: document.querySelector('button[data-subscraption]'),
};
console.log(refs.subscribeBtn);

openSpamModal();

refs.modal.addEventListener('hide.bs.modal', openSpamModal);
refs.subscribeBtn.addEventListener('click', onSubBtnClick);

function openSpamModal() {
  if (pormptCounetr === MAX_PROMPT_ATTEMPS || hasSubscripe) {
    console.log('Max click close or subscripe');
    return;
  }
  setTimeout(() => {
    console.log('Open modal');
    modal.show();
    pormptCounetr += 1;
  }, PROMPT_DALLY);
}

function onSubBtnClick() {
  hasSubscripe = true;
  modal.hide();
}

// {

//

//   const inervalId = setInterval(() => {
//     if (pormptCounetr === MAX_PROMPT_ATTEMPS || hasSubscripe) {
//       clearInterval(inervalId);
//       return;
//     }
//     console.log(`Subscripe Now - ` + Date.now());
//     pormptCounetr += 1;
//     console.log(pormptCounetr);
//   }, PROMPT_DALLY);
// }

// console.log(modal);
// console.log(BSN);
