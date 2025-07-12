function getBookSale(books){
    const discount = 0.3;
    saleBooks = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    });
    return saleBooks;
}