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

    fetch(url, options)
      .then(responce => responce.json())
      .then(data => {
        console.log(data);
        this.page += 1;
        // console.log(`after`, this);
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
