async function getBooks(query) {
  const url = query
    ? `/api/books?q=${encodeURIComponent(query)}`
    : "/api/books";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status},${res.statusText}`);

    return await res.json();
  } catch (err) {
    throw err;
  }
}

async function createBook(payload) {
  try {
    return await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw err;
  }
}

async function updateBook(id, payload) {
  try {
    return await fetch(`/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw err;
  }
}

async function deleteBook(id) {
  try {
    return await fetch(`/api/books/${id}`, { method: "DELETE" });
  } catch (err) {
    throw err;
  }
}
