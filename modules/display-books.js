/* eslint-disable import/prefer-default-export */
const container = document.querySelector('.collection');
const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
export function displayBlock() {
  container.innerHTML = '';
  bookList.forEach((book, index) => {
    container.innerHTML += `<ul class="Books">
      <li>${book.title}</li>
      <li>${book.author}</li>
      <li><button class = "remove" onlick= "remove()" data-index="${index}">Remove</button></li>
      </ul>`;
  });
}
