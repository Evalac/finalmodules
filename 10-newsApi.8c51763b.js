const e={searchForm:document.querySelector(".search-form"),loadMoreBtn:document.querySelector(".load-more-button")};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.qwery.value,t.fetchArticles()})),e.loadMoreBtn.addEventListener("click",(function(e){t.fetchArticles()}));const t=new class{constructor(){this.searchForm="",this.page=1}fetchArticles(){console.log("before",this);const e={headers:{Authorization:"59ea23f33abe45d5ae23b6a2a5f58a36"}},t=`https://newsapi.org/v2/everything?q=${this.searchForm}&language=en&pageSize=5&page=${this.page},`;fetch(t,e).then((e=>e.json())).then((e=>{this.page+=1,console.log("after",this)}))}get query(){return this.searchForm}set query(e){this.searchForm=e}};
//# sourceMappingURL=10-newsApi.8c51763b.js.map
