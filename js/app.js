document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const createListItem = function(title, author, category) {
    const titleHeading = document.createElement('h2');
    titleHeading.textContent = title;
    const authorHeading = document.createElement('h3');
    authorHeading.textContent = author;
    const categoryHeading = document.createElement('h4');
    categoryHeading.textContent = category;
    addToList(titleHeading, authorHeading, categoryHeading);
  }
  
  const addToList = function(titleHeading, authorHeading, categoryHeading) {
    const unorderedList = document.querySelector('#reading-list');
    const listItem = document.createElement('li');
    listItem.appendChild(titleHeading);
    listItem.appendChild(authorHeading);
    listItem.appendChild(categoryHeading);
    unorderedList.appendChild(listItem);
  }

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    createListItem(title, author, category);
    
    form.reset();
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})
