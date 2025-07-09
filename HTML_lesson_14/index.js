const form = document.getElementById("add-book-form");
const booksList = document.getElementById("books-list");

const books = [];

function renderBooks() {
  books.forEach((b) => {
    while (booksList.firstChild) {
      booksList.removeChild(booksList.firstChild);
    }

    const li = document.createElement("li"); // <li></li>
    li.textContent = `"${b.title}" by ${b.author}`; // <li>"Lord" by Tolkien</li>
    booksList.appendChild(li);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.author.value);
  console.log(event.target.title.value);

  const newBook = {
    author: event.target.author.value,
    title: event.target.title.value,
  };

  books.push(newBook);
  console.log(books);

  renderBooks();
}

form.addEventListener("submit", handleSubmit);
if (hasBook(newBook)) {
  alert("Error: Book with this title and author already exists");
} else {
  books.push(newBook);
}

<button type="button" id="clear-list">
  Clear list
</button>;
const clearBtn = document.getElementById("clear-list");
