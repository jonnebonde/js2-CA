export function populateEditForm(data) {
  const title = document.querySelector("#editTitleArticle");
  const summary = document.querySelector("#editSummaryArticle");
  const author = document.querySelector("#editAuthorArticle");
  const articleId = document.querySelector("#editArticleId");

  title.value = data.title;
  summary.value = data.summary;
  author.value = data.author;
  articleId.value = data.id;
}
