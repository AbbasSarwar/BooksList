const container = document.querySelector('.collection');
const BookName = document.querySelector('#book');
const authorName = document.querySelector('#author');
const btn = document.querySelector('form');

const bookList = JSON.parse(localStorage.getItem('book-list')) || [];

class Book {
  constructor() {
    this.books = [];
  }
/* eslint-disable */
  addBook() {
    const title = BookName.value;
    const author = authorName.value;
    const books = { title, author };
    bookList.push(books);
    localStorage.setItem('book-list', JSON.stringify(bookList));
  }

  // display method
  displayBlock() {
    container.innerHTML = '';
    bookList.forEach((book, index) => {
      container.innerHTML += `
      <ul class="Books">
        <li class="inps">"${book.title}" by ${book.author}</li>
        <li class="btnclass">
          <button class = "remove" onlick= "remove()" data-index="${index}">Remove</button>
        </li>
        </ul>
        `;
    });
  }
// remove method
  remove(index) {
    bookList.splice(index, 1);
    localStorage.setItem('book-list', JSON.stringify(bookList));
    book.displayBlock();
  }
}
/* eslint-enable */

const book = new Book();
btn.addEventListener('submit', book.addBook);
book.displayBlock();

// eventliststener
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.getAttribute('data-index');
    book.remove(index);
  }
});


const listLink = document.querySelector('#list-link')
const addBookLink = document.querySelector('#addbook-link')
const contactLink =document.querySelector('#contact-link')

const bookListSection =document.querySelector('#booklist-section')
const addbookInputs =document.querySelector('#addbook-inputs')
const contactSection =document.querySelector('#contact-section')

listLink.addEventListener('click',function(){
  console.log('clicked')
  addbookInputs.classList.add('hidden')
  contactSection.classList.add('hidden')
  listLink.classList.add('active')
})

addbookInputs.addEventListener('click',function(){
    console.log('clicked')
    contactSection.classList.add('hidden')
   contactSection.classList.add('hidden')
    addbookInputs.classList.add('active')
})
contactSection.addEventListener('click',function(){
  console.log('clicked')
  addbookInputs.classList.add('hidden')
 listLink.classList.add('hidden')
  contactSection.classList.add('active')
})
