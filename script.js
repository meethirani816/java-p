function search(event) {
    event.preventDefault();
    const query = document.getElementById('search-bar').value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;  // You can replace this with your own search engine URL
  }
}
  