!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=function(){"use strict";function r(){e(t)(this,r),this.searchForm="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this;console.log("before",this);var t="https://newsapi.org/v2/everything?q=".concat(this.searchForm,"&language=en&pageSize=10&page=").concat(this.page);return fetch(t,{headers:{Authorization:"59ea23f33abe45d5ae23b6a2a5f58a36"}}).then((function(e){return e.json()})).then((function(t){return e.page+=1,t.articles}))}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchForm},set:function(e){this.searchForm=e}}]),r}();function c(e,t){var n=e.map((function(e){var t=e.author,n=e.content,r=e.description,a=e.publishedAt,c=e.title,o=e.url,i=e.urlToImage;return'<article class="news-article">\n        <header class="article-header">\n    <img src="'.concat(i,'" alt="">\n          <h2 class="article-title">\n            <a href="').concat(o,'" target="_blank">').concat(c,'</a>\n          </h2>\n          <p class="article-author">Автор:').concat(t,'</p>\n          <p class="article-date">Опубліковано:').concat(a,'</p>\n        </header>\n        <section class="article-description">\n          <p>').concat(r,'</p>\n        </section>\n        <section class="article-content">\n          <p>').concat(n,"</p>\n        </section>\n      </article>")})).join();return t.insertAdjacentHTML("beforeend",n)}var o={searchForm:document.querySelector(".search-form"),loadMoreBtn:document.querySelector(".load-more-button"),containerNews:document.querySelector(".contentNews")},i=new a;o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),i.query=e.currentTarget.elements.qwery.value,i.resetPage(),i.fetchArticles().then((function(e){return c(e,o.containerNews)}))})),o.loadMoreBtn.addEventListener("click",(function(e){i.fetchArticles().then((function(e){return c(e,o.containerNews)}))}))}();
//# sourceMappingURL=10-newsApi.c89c7c54.js.map
