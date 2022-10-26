let myLibrary = [];
let bookCount = 0;

const Book = {
    author: "A. A. Mielne",
    title: "Winnie the Pooh",
    status: "read"
};

let form = document.getElementById("form");
form.addEventListener("submit", createBookEntry);


function createBookEntry(e) {
    e.preventDefault();

    const book1 = Object.create(Book);
    book1.author = document.getElementById("author").value;
    book1.title = document.getElementById("bookTitle").value;
    book1.status = document.getElementById("status").value;

    addBookToLibrary(book1);
    console.log(book1);

}

function addBookToLibrary(book) {
    myLibrary += book;
}

function displayLibrary(myLibrary) {

    for (let i = 0; i < myLibrary.length; i++) {

        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");

        const author = document.createElement("div");
        author.classList.add("author");
        author.innerText = myLibrary[i].author;

        const title = document.createElement("div");
        title.classList.add("title");
        author.innerText = myLibrary[i].title;

        const pages = document.createElement("div");
        pages.classList.add("pages");
        author.innerText = myLibrary[i].pages;

        const read = document.createElement("div");
        read.classList.add("read");
        author.innerText = myLibrary[i].read;

        bookContainer.appendChild(author);
        bookContainer.appendChild(title);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
    }
}

//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// idea: ligt and dark mode