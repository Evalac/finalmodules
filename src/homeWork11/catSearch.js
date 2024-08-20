import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';

const API_KEY_CAT =
  'live_QDlgVqCBmKpnF37DbgTDS1mKTXHBpluD6Y5yKuT2Acuy938l2FL4U8W9pOKwPfJ0';

fetchCats().then(r =>
  r.map(({ id, name }) => {
    return console.log(id, name);
  })
);
function fetchCats(params) {
  return fetch(`https://api.thecatapi.com/v1/breeds`).then(responce =>
    responce.json()
  );
}
