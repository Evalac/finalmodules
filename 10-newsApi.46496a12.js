!function(){({searchForm:document.querySelector(".search-form")}).searchForm.addEventListener("submit",(function(e){e.preventDefault()}));fetch("https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1,",{headers:{Authorization:"59ea23f33abe45d5ae23b6a2a5f58a36"}}).then((function(e){return e.json()})).then(console.log)}();
//# sourceMappingURL=10-newsApi.46496a12.js.map
