import axios from 'axios';
// import { Carousel } from 'bootstrap.native';

// axios.defaults.headers.common['x-api-key'] =
//   'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';
const API_KEY_CAT =
  'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';

const refs = {
  btnListEl: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  infoCart: document.querySelector('.cat-info'),
};

refs.btnListEl.addEventListener('change', evt => {
  const catId = evt.target.value;
  fetchCatByID(catId);
});

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

function fetchCats() {
  ShowLoader();
  HideError();
  return fetch(`https://api.thecatapi.com/v1/breeds`).then(responce =>
    responce.json()
  );
}

function fetchCatByID(catID) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catID}`)
    .then(responce => responce.json())
    .then(catInfo => {
      catInfo.map(({ url }) => {
        return (refs.infoCart.innerHTML = `<img src="${url}" alt="" width="300">`);
      });
    });
}

function ShowLoader(params) {
  refs.loader.classList.remove('hidden');
  refs.loader.classList.add('visible');
  refs.btnListEl.classList.add('hidden');
  refs.btnListEl.classList.remove('visible');
}
function HideLoader(params) {
  refs.loader.classList.remove('visible');
  refs.loader.classList.add('hidden');
  refs.btnListEl.classList.add('visible');
  refs.btnListEl.classList.remove('hidden');
}
function ShowError(params) {
  refs.error.classList.remove('hidden');
  refs.error.classList.add('visible');
  refs.btnListEl.classList.add('hidden');
  refs.btnListEl.classList.remove('visible');
}
function HideError(params) {
  refs.error.classList.remove('visible');
  refs.error.classList.add('hidden');
}
