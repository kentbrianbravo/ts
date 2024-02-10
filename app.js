"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var greetings = "Welcome to Library! ";
console.log(greetings);
var command = "Enter a number for operation to do";
console.log(command);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Function to prompt the user for book details and save them into an object
var getDetails = function (callback) {
    rl.question("Enter Book Title: ", function (title) {
        rl.question("Enter Book Author: ", function (author) {
            rl.question("Enter Book Date: ", function (date) {
                var book = {
                    title: title,
                    author: author,
                    date: date,
                };
                callback(book); // Call the callback function with the created book object
                main();
            });
        });
    });
};
var addBook = function () {
    getDetails(function (book) {
        console.log('Book details:');
        console.log('Title:', book.title);
        console.log('Author:', book.author);
        console.log('Date:', book.date);
        savedBook.push(book);
    });
};
//Store books in savedBook array
var savedBook = [];
//Display books saved in savedBook array
var displayBook = function () {
    savedBook.sort(function (existing, created) {
        if (existing.title !== created.title) {
            return existing.title.localeCompare(created.title);
        }
        else {
            return created.date - existing.date;
        }
    });
    // person.sort((a, b) => {
    //   if (a.age !== b.age) {
    //     return a.age - b.age;
    //   } else {
    //     return b.name.localeCompare(a.name);
    //   }
    // })
    console.log(savedBook);
    main();
};
var main = function () {
    rl.question("1-add, 2-remove, 3-search, 4 print: ", function (answer) {
        switch (answer) {
            case "1":
                addBook();
                break;
            case "2":
                console.log("Remove");
                break;
            case "3":
                console.log("Search");
                break;
            case "4":
                displayBook();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid answer!");
                main();
        }
    });
};
main();
// // Print Books saved into the object
// const saveBooks = (book : Book[]) => {
//   console.log('Book details entered:');
//   book.forEach(book => {
//   console.log('Title:', book.title);
//   console.log('Author:', book.author);
//   console.log('Date:', book.date);
// }); 
// };
// const printBook = () => {
//   const books: Book[] = [];
//   const addBook = (book: Book) => {
//       books.push(book);
//       saveBooks(books);
//   };
//   bookDetails(addBook);
// };
// function test() {
//   bookDetails((book) => {
//     console.log('Book details:');
//     console.log('Title:', book.title);
//     console.log('Author:', book.author);
//     console.log('Date:', book.date);
//   });
// }
