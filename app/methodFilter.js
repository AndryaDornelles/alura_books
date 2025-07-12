const btnFilter = document.querySelectorAll('.btn')
btnFilter.forEach(btn => btn.addEventListener('click', getFilter))

function getFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = books.filter(book => book.categoria == category);
    showBooksUI(filterBooks);
}