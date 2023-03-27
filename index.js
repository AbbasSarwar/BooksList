import { DisplaySec } from './modules/display-sections.js';

// add Book
import { addBook } from './modules/add-book.js';

// Display books
import { displayBlock } from './modules/display-books.js';

// remove book
import { remove } from './modules/remove-book.js';
import { DateTime } from './modules/luxon.js';

const a = document.querySelectorAll('.alink');
a[0].addEventListener('click', (event) => {
  DisplaySec(event, 'booklist-section');
});
a[1].addEventListener('click', (event) => {
  DisplaySec(event, 'addbook-inputs');
});
a[2].addEventListener('click', (event) => {
  DisplaySec(event, 'contact-section');
});
const btn = document.querySelector('form');
btn.addEventListener('submit', addBook);
displayBlock();
const container = document.querySelector('.collection');
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    remove(index);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

const dateContainer = document.querySelector('.top-info');
setInterval(() => {
  const MyTime = new Date();
  dateContainer.innerHTML = MyTime.toLocaleString(DateTime.DATETIME_MED);
}, 1000);