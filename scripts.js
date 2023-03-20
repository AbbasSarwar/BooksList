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
  for (let i = 0; i < bookList.length; i += 1) {
    container.innerHTML += `<ul class="Books">
  <li>${bookList[i].title}</li>
  <li>${bookList[i].author}</li>
  <li><button class = "remove">Remove</button></li>
  </ul>`;
  }
}

// remove btn
displayBlock();
