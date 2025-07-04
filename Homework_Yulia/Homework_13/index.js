let books = [
  { title: "Мастер и Маргарита", author: "М.А.Булгаков" },
  { title: "Евгений Онегин", author: "А.С.Пушкин" },
  { title: "Преступление и наказание", author: "Ф.М.Достоевский" },
  { title: "Война и мир", author: "Л.Н.Толстой" },
];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const bookList = document.getElementById("book-list");

// обновление списка
function renderList() {
  bookList.innerHTML = "";

  books.map((book) => {
    const li = document.createElement("li");
    li.textContent = `"${book.title}" от ${book.author}`;
    bookList.appendChild(li);
  });
}

// Обработчик
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (!title || !author) {
    alert("Пожалуйста, заполните оба поля.");
    return;
  }

  // Проверки
  const exists = books.some(
    (book) =>
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
  );

  if (exists) {
    alert("Эта книга уже в списке!");
    return;
  }

  // Новый список
  books.push({ title, author });
  renderList();

  // Очищение
  titleInput.value = "";
  authorInput.value = "";
});

clearBtn.addEventListener("click", () => {
  books = [];
  renderList();
});

renderList();
