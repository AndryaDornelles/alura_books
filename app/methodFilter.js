const btnFilter = document.querySelectorAll('.btn')
btnFilter.forEach(btn => btn.addEventListener('click', getFilter))

function getFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = category == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category);
    showBooksUI(filterBooks);
}