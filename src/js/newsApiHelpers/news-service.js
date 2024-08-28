const API_KEY = `59ea23f33abe45d5ae23b6a2a5f58a36`;
const BASE_URL = `https://newsapi.org/v2`;

class NewsApiService {
  constructor() {
    this.searchForm = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(`before`, this);
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };

    const url = `${BASE_URL}/everything?q=${this.searchForm}&language=en&pageSize=4&page=${this.page}`;

    return fetch(url, options)
      .then(responce => responce.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchForm;
  }

  set query(NewQuery) {
    this.searchForm = NewQuery;
  }
}

export { NewsApiService };
