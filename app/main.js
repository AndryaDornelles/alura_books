 let books = [];
 const endPointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
 getBooks();
 const sectionElementBook = document.getElementById('books');
 

async function getBooks() {
    const res = await fetch(endPointAPI);
    books = await res.json();
    console.table(books);
    showBooksUI(books);
}

function showBooksUI(bookList) {
    bookList.forEach(book => {
        const isAvailable = book.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";

        sectionElementBook.innerHTML += `
            <div class="book">
                <img class="${isAvailable}" src="${book.imagem}"
                    alt="${book.alt}/>
                <h2 class="book__title">
                    ${book.titulo}
                </h2>
                <p class="book__description">${book.autor}</p>
                <p class="book__price" id="preco">R$${book.preco}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}
