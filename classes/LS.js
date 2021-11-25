class LS {
    addBook(book) {
        // console.log(book);
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        books.push(book);
        // console.log(books);
        localStorage.setItem('books', JSON.stringify(books));
    }
}