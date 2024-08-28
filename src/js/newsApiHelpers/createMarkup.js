function createMarkup(data, containerEl) {
  const markup = data
    .map(
      ({
        author,
        content,
        description,
        publishedAt,
        title,
        url,
        urlToImage,
      }) => `<article class="news-article">
        <header class="article-header">
    <img src="${urlToImage}" alt="">
          <h2 class="article-title">
            <a href="${url}" target="_blank">${title}</a>
          </h2>
          <p class="article-author">Автор:${author}</p>
          <p class="article-date">Опубліковано:${publishedAt}</p>
        </header>
        <section class="article-description">
          <p>${description}</p>
        </section>
        <section class="article-content">
          <p>${content}</p>
        </section>
      </article>`
    )
    .join('');

  return containerEl.insertAdjacentHTML('beforeend', markup);
}

export { createMarkup };
