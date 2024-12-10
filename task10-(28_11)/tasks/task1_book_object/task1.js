/**
 * given an object book with the properties title, author, and yearPublished. Perform the following operations:
    Access the author property and print it.
    Modify the yearPublished property to 2022.
    Add a new property genre to the book object with the value “Fiction”.
    Delete the title property from the book object.
 */

var book = {
    "title" : "Panchatantra",
    "author" : "Vishnu Sharma",
    "yearPublished" : "200 BCE"
}

console.log(book);

console.log(book.author);

book["yearPublished"] = "2022";
console.log(book);

book["genre"] = "Fiction";
console.log(book);

delete book.title;
console.log(book);