const booksContainer = document.getElementById("books");
const emptyMessage = document.getElementById("empty");

function render(books) {
  booksContainer.innerHTML = "";

  if (books.length === 0) {
    emptyMessage.classList.remove("empty-hidden");
    return;
  }
  emptyMessage.classList.add("empty-hidden");

  for (var i = 0; i < books.length; i++) {
    const book = books[i];

    const card = document.createElement("div");
    card.className = "book";
    card.setAttribute("id", `${book.id}`);
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <span class="status ${book.read ? "read" : ""}">
        ${book.read ? "خوانده شده" : "خوانده نشده"}
      </span>
      <div class="actions">
        <button class="edit">ویرایش</button>
        <button class="delete">حذف</button>
      </div>
    `;

    card.querySelector(".edit").addEventListener("click", (e) => {
      const target = e.target.closest(".book");
      const targetID = +target.id;

      const bookIndex = books.findIndex((book) => book.id === targetID);

      openModal(books[bookIndex]);
    });
    card.querySelector(".delete").addEventListener("click", async () => {
      const isConfirmed = confirm("مایل به حذف این کتاب هستید؟");
      if (!isConfirmed) return;
      try {
        await deleteBook(+card.id);
        await loadBooks();
      } catch (err) {
        console.error(err);
        alert(err);
      }
    });

    booksContainer.appendChild(card);
  }
}
