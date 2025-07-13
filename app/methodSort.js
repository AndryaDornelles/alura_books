let btnOrderPrice = document.getElementById('btnOrdenarPorPreco');
btnOrderPrice.addEventListener('click', orderPrice);

function orderPrice() {
    let orderBooks = books.sort((a, b) => a.preco - b.preco);
    showBooksUI(orderBooks);
}