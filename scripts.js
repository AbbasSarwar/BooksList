const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
const btn = document.querySelector('form');

const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
function addBook() {
  const title = BookName.value;
  const author = authorName.value;
  const books = { title, author };
  bookList.push(books);
  localStorage.setItem('book-list', JSON.stringify(bookList));
}
btn.addEventListener('submit', addBook);

// display
function displayBlock() {
  container.innerHTML = '';
  bookList.forEach((book, index) => {
    container.innerHTML += `<ul class="Books">
    <li>${book.title}</li>
    <li>${book.author}</li>
    <li><button class = "remove" onlick= "remove()" data-index="${index}">Remove</button></li>
    </ul>`;
  });
}

function remove(index) {
  bookList.splice(index, 1);
  localStorage.setItem('book-list', JSON.stringify(bookList));
  displayBlock();
}
displayBlock();
// remove btn
// const btnRemove = document.querySelector('.remove');
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    remove(index);
  }
});