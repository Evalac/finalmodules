// import pokemonCard from '';

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(error => {
    console.log(error);
  });
