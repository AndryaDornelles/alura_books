function sumCostAvailableBooks(filterBooks) {
    return books.reduce((acc, book) => acc + book.preco, 0).toFixed(2);
}