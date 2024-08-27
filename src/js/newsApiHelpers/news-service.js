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

    const url = `https://newsapi.org/v2/everything?q=${this.searchForm}&language=en&pageSize=10&page=${this.page}`;

    return fetch(url, options)
      .then(responce => responce.json())
      .then(data => {
        this.page += 1;
        return data.articles;
      });
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
