const btnFilter = document.querySelectorAll('.btn')
btnFilter.forEach(btn => btn.addEventListener('click', getFilter))

function getFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = category == 'disponivel' ? filterAvailability() : filterCategory(category);
    showBooksUI(filterBooks);

    if (category == 'disponivel') {
        const totalCost = sumCostAvailableBooks(filterBooks);
        console.log(totalCost);
        
        showTotalValue(totalCost);
    }
}

function filterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalValue(totalCost) {
    totalValueBooks.innerHTML = `
         <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalCost}</span></p>
        </div>
    `;
}