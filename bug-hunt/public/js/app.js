const searchInput = document.getElementById("search");
const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");

async function loadBooks(query) {
  try {
    const books = await getBooks(query);
    console.log(books);

    if (books.length === 0) throw new Error("کتابی وجود ندارد");

    render(books);
  } catch (err) {
    console.error(err);
    alert(err);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const isConfirmed = confirm("تغییرات ذخیره شوند؟");
  if (!isConfirmed) return;
  try {
    const payload = {
      title: form.title.value,
      author: form.author.value,
      read: form.read.checked,
    };

    if (editingId) {
      await updateBook(editingId, payload);
    } else {
      await createBook(payload);
    }

    closeModal();
    await loadBooks(searchInput.value);
  } catch (err) {
    console.error(err);
    alert(err);
  }
});

searchInput.addEventListener("input", async (event) => {
  try {
    await loadBooks(event.target.value);
  } catch (err) {
    console.error(err);
    alert(err);
  }
});

addBtn.addEventListener("click", () => openModal(null));
cancelBtn.addEventListener("click", closeModal);

loadBooks();
