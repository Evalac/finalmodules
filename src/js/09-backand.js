const p = document.querySelector('.poke');
fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    createMarkup(pokemon);
  })
  .catch(error => {
    console.log(error);
  });

function createMarkup(poke) {
  const markup = poke
    .map(
      ({ name, weight, height }) => `<div class='card'>
  <div class='card-img-top'>
    <img src='' alt='' />
  </div>
  <div class='card-body'>
    <h2 class='card-title'>Імя ${name}</h2>
    <p class='card-text'>Вага ${weight}</p>
    <p class='card-text'>Ріст ${height}</p>
    <p class='card-text'><b>Вміння</b></p>
    <ul class='clas-list-group'>
      <li class='clas-list-item'></li>
    </ul>
  </div>
</div>`
    )
    .join();
  return p.insertAdjacentHTML('beforeend', markup);
}
