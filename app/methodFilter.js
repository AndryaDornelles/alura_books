const btnFilter = document.querySelectorAll('.btn')
btnFilter.forEach(btn => btn.addEventListener('click', getFilter))

function getFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = category == 'disponivel' ? filterAvailability() : filterCategory(category);
    showBooksUI(filterBooks);
    category == 'disponivel' ? showTotalValue() : '';
}

function filterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalValue() {
    totalValueBooks.innerHTML = `
         <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
    `;
}