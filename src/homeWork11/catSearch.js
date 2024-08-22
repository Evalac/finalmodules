import axios from 'axios';
// import { Carousel } from 'bootstrap.native';

// axios.defaults.headers.common['x-api-key'] =
//   'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';

const refs = {
  btnListEl: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

function ShowLoader(params) {
  refs.loader.classList.remove('hidden');
  refs.loader.classList.add('visible');
}
function HideLoader(params) {
  refs.loader.classList.remove('visible');
  refs.loader.classList.add('hidden');
}
function ShowError(params) {
  refs.error.classList.remove('hidden');
  refs.error.classList.add('visible');
}
function HideError(params) {
  refs.error.classList.remove('visible');
  refs.error.classList.add('hidden');
}

const API_KEY_CAT =
  'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';

fetchCats()
  .then(cats => {
    cats.map(({ id, name }) => {
      const option = document.createElement('option');
      option.value = id;
      option.text = name;
      refs.btnListEl.add(option);
      HideLoader();
    });
  })
  .catch(error => {
    HideLoader();
    ShowError(error);
  });

function fetchCats(params) {
  ShowLoader();
  HideError();
  return fetch(`https://api.thecatapi.com/v1/breeds`).then(responce =>
    responce.json()
  );
}
