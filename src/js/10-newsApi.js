const refs = {
  searchForm: document.querySelector('.search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
}

const options = {
  headers: {
    Authorization: `59ea23f33abe45d5ae23b6a2a5f58a36`,
  },
};

const url =
  'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1,';

fetch(url, options)
  .then(responce => responce.json())
  .then(console.log);
