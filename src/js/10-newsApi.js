import { NewsApiService } from './newsApiHelpers/news-service';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more-button'),
};

const newsApiServise = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiServise.query = e.currentTarget.elements.qwery.value;
  newsApiServise.resetPage();
  newsApiServise.fetchArticles();
}

function onLoadMore(e) {
  newsApiServise.fetchArticles();
}
