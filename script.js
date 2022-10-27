let myLibrary = [];
let bookCount = 0;

const book = {
    author: "A. A. Mielne",
    title: "Winnie the Pooh",
    status: "read"
};

let form = document.getElementById("form");
form.addEventListener("submit", createBookEntry);


function createBookEntry(e) {
    e.preventDefault();

    const newBook = Object.create(book);
    newBook.author = document.getElementById("author").value;
    newBook.title = document.getElementById("bookTitle").value;
    newBook.status = document.getElementById("status").value;

    addBookToLibrary(newBook);
    console.log(newBook);

}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
    displayLibrary(myLibrary);
}

function displayLibrary(myLibrary) {

    const books_display = document.getElementById("books_display");
    books_display.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {
        const thisBook = myLibrary[i];
        console.log(thisBook)

        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");

        const author = document.createElement("div");
        author.classList.add("author");
        const authorSpan = document.createElement("span");
        authorSpan.classList.add("bold");
        authorSpan.innerText = "Author: ";
        author.appendChild(authorSpan);
        const authorSpan2 = document.createElement("span");
        authorSpan2.innerText = thisBook.author;
        author.appendChild(authorSpan2);


        const title = document.createElement("div");
        title.classList.add("title");
        const titleSpan = document.createElement("span");
        titleSpan.classList.add("bold");
        titleSpan.innerText = "Title: ";
        title.appendChild(titleSpan);
        const titleSpan2 = document.createElement("span");
        titleSpan2.innerText = thisBook.title;
        title.appendChild(titleSpan2);

        const read = document.createElement("div");
        read.classList.add("readYN");
        const readSpan = document.createElement("span");
        readSpan.classList.add("bold");
        readSpan.innerText = "Status: ";
        read.appendChild(readSpan);
        const readSpan2 = document.createElement("span");
        readSpan2.innerText = thisBook.status;
        read.appendChild(readSpan2);

        bookContainer.appendChild(author);
        bookContainer.appendChild(title);
        bookContainer.appendChild(read);


        books_display.appendChild(bookContainer);
    }
}

//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// idea: ligt and dark mode