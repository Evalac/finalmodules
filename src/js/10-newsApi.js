const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more-button'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

class NewsApiService {
  constructor() {
    this.searchForm = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(`before`, this);
    const options = {
      headers: {
        Authorization: `59ea23f33abe45d5ae23b6a2a5f58a36`,
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchForm}&language=en&pageSize=5&page=${this.page},`;

    fetch(url, options)
      .then(responce => responce.json())
      .then(data => {
        this.page += 1;
        console.log(`after`, this);
      });
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
  newsApiServise.fetchArticles();
}
