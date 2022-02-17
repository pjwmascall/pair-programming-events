document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const addToList = function(title, author, category) {
    const unorderedList = document.querySelector('#reading-list');
    console.log('it worked')
  }

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    addToList()
    console.log(event.target.title.value, event.target.author, event.target.category)
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})
