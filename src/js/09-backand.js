import { fetchPokemonById } from './helpers/api-service';
import { refs } from './helpers/refs';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchPoke = form.elements.query.value;

  fetchPokemonById(searchPoke)
    .then(pokemon => createMarkup(pokemon))
    .catch(error => onError(error))
    .finally(() => {
      form.reset();
    });
}

function createMarkup(pokemon) {
  const markup = `<div class="card">
      <div class="card-img-top">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      </div>
      <div class="card-body">
        <h2 class="card-title">${pokemon.name}</h2>
        <p class="card-text">Вага: ${pokemon.weight}</p>
        <p class="card-text">Ріст: ${pokemon.height}</p>
        <p class="card-text"><b>Вміння</b></p>
        <ul class="clas-list-group">
          ${pokemon.abilities
            .map(
              ability =>
                `<li class="clas-list-item">${ability.ability.name}</li>`
            )
            .join('')}
        </ul>
      </div>
    </div>`;
  refs.cartEl.innerHTML = markup;
}

function onError(error) {
  console.dir(error);
  alert('Упс щось пішло не так');
}

// знизу друга вправа по фетчу
// fetch(
//   'https://optovik22.net/ua/shopping_cart/checkout/807497607?gad_source=1&gbraid=0AAAAAqkFuEQSoKAHB1GB_WIZ0y8Hcdo6x&gclid=CjwKCAjw2dG1BhB4EiwA998cqHpUuTqOi41BS8nOtCCp2kAr5C9nJtLnf29v82db7svF9gL4Ea94GhoCPHsQAvD_BwE&type=adaptive&source=company_site&companyId=2334820'
// )
//   .then(responce => responce.json())
//   .then(poke => console.log(poke));

// 59ea23f33abe45d5ae23b6a2a5f58a36

const options = {
  headers: {
    Authorization: `59ea23f33abe45d5ae23b6a2a5f58a36`,
  },
};

fetch('https://newsapi.org/v2/everything?q=cat&language=en', options)
  .then(responce => responce.json())
  .then(console.log);
