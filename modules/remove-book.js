/* eslint-disable import/prefer-default-export */
const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
export function remove(index) {
  bookList.splice(index, 1);
  localStorage.setItem('book-list', JSON.stringify(bookList));
}
