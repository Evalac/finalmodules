const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more-button'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

class NewsApiService {
  constructor() {
    this.searchForm = '';
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: `59ea23f33abe45d5ae23b6a2a5f58a36`,
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchForm}&language=en&pageSize=5&page=1,`;

    fetch(url, options)
      .then(responce => responce.json())
      .then(console.log);
  }

  get query() {
    return this.searchForm;
  }

  set query(NewQuery) {
    this.searchForm = NewQuery;
  }
}

const newsApiServise = new NewsApiService();

function onSearch(e) {
  e.preventDefault();
  newsApiServise.query = e.currentTarget.elements.qwery.value;
  newsApiServise.fetchArticles();
}

function onLoadMore(e) {
  console.log(`loadmore`);
}
