// class creation
class Book{
    title;
    author;
    isbn;

    // constructor
    constructor(title, author, isbn){
        // to access properties of same class
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // availability status methods
    checkOut(){
        console.log(`${this.title} is checked out.`);
    }

    returnBook(){
        console.log(`${this.title} is returned.`);
    }

    // title update method
    updateTitle(newTitle){
        this.title = newTitle;
    }
}

var book1 = new Book("Harry Potter", "J.K.Rowling", "123456789");
console.log(book1);

book1.updateTitle("Harry Potter and the Philosopher's Stone");

book1.returnBook();

console.log("------------------------------------------------------");

var book2 = new Book("Ramayan", "Valmiki", "012345678");
console.log(book2);

book2.checkOut();