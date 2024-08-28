import { NewsApiService } from './newsApiHelpers/news-service';
import { createMarkup } from './newsApiHelpers/createMarkup';
import { LoadMoreBtn } from './newsApiHelpers/loadMoreBtn';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('  [data-action="load-more"]'),
  containerNews: document.querySelector('.contentNews'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
});

const newsApiServise = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiServise.query = e.currentTarget.elements.qwery.value;
  newsApiServise.resetPage();
  loadMoreBtn.disabled();
  loadMoreBtn.show();
  newsApiServise.fetchArticles().then(articles => {
    clearArticalsContainer();

    createMarkup(articles, refs.containerNews);
    loadMoreBtn.enable();
    loadMoreBtn.hide();
  });
}

function onLoadMore(e) {
  loadMoreBtn.disabled();
  loadMoreBtn.show();
  newsApiServise.fetchArticles().then(articles => {
    createMarkup(articles, refs.containerNews), loadMoreBtn.enable();
    loadMoreBtn.hide();
  });
}

function clearArticalsContainer() {
  refs.containerNews.innerHTML = '';
}
