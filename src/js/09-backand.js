const refs = {
  cartEl: document.querySelector('.pokecart'),
  searchForm: document.querySelector('.js-form-search'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchPoke = form.elements.query.value;

  fetchPokemonById(searchPoke)
    .then(pokemon => createMarkup(pokemon))
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
    });
}

function fetchPokemonById(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    }
  );
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
