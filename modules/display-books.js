const container = document.querySelector('.collection');
const bookList = JSON.parse(localStorage.getItem('book-list')) || [];
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
export function remove(index) {
  bookList.splice(index, 1);
  localStorage.setItem('book-list', JSON.stringify(bookList));
displayBlock();
}
export {displayBlock}