import { NewsApiService } from './newsApiHelpers/news-service';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more-button'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newsApiServise = new NewsApiService();

function onSearch(e) {
  e.preventDefault();
  newsApiServise.query = e.currentTarget.elements.qwery.value;
  newsApiServise.fetchArticles();
}

function onLoadMore(e) {
  newsApiServise.fetchArticles();
}
