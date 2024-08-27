import { NewsApiService } from './newsApiHelpers/news-service';
import { createMarkup } from './newsApiHelpers/createMarkup';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more-button'),
  containerNews: document.querySelector('.contentNews'),
};

class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    console.log(selector);
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spiner = refs.button.querySelector('.spinner');
    return refs;
  }
}

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
});

console.log(loadMoreBtn);

const newsApiServise = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiServise.query = e.currentTarget.elements.qwery.value;
  newsApiServise.resetPage();

  newsApiServise.fetchArticles().then(articles => {
    clearArticalsContainer();
    createMarkup(articles, refs.containerNews);
  });
}

function onLoadMore(e) {
  newsApiServise
    .fetchArticles()
    .then(articles => createMarkup(articles, refs.containerNews));
}

function clearArticalsContainer() {
  refs.containerNews.innerHTML = '';
}
