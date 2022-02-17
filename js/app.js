document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const addToList = function(title, author, category) {
    const unorderedList = document.querySelector('#reading-list');
    const listItem = document.createElement('li')
    const titleHeading = document.createElement('h2')
    titleHeading.textContent = title
    const authorHeading = document.createElement('h3')
    authorHeading.textContent = author
    const categoryHeading = document.createElement('h4')
    categoryHeading.textContent = category
    listItem.appendChild(titleHeading)
    listItem.appendChild(authorHeading)
    listItem.appendChild(categoryHeading)
    unorderedList.appendChild(listItem)
  }

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    addToList(title, author, category)
    console.log(event.target.title.value, event.target.author, event.target.category)
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})
