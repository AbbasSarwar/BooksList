const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');

const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
export const addBook = () => {
  const title = BookName.value;
  const author = authorName.value;
  const books = { title, author };
  bookList.push(books);
  localStorage.setItem('book-list', JSON.stringify(bookList));
};