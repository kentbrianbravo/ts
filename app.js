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
        console.log("Book details:");
        console.log("Title:", book.title);
        console.log("Author:", book.author);
        console.log("Date:", book.date);
        savedBook.push(book);
    });
};
//Store books in savedBook array
var savedBook = [];
//Display books saved in savedBook array
var displayBook = function () {
    savedBook.sort(function (existingBook, newBook) {
        if (existingBook.title !== newBook.title) {
            return existingBook.title.localeCompare(newBook.title);
        }
        else {
            return newBook.date - existingBook.date;
        }
    });
    console.log(savedBook);
    main();
};
//Remove books saved in savedBook array using Splice
var removeBook = function () {
    rl.question("Enter date of book to remove ex:2024 : ", function (answer) {
        savedBook.forEach(function (existingBook, index) {
            if (existingBook.date == parseInt(answer)) {
                savedBook.splice(index, 1);
            }
        });
        console.log("Successfully deleted book with year ".concat(answer));
        console.log(savedBook);
        main();
    });
};
//Search books saved in savedBook array and display the results
var searchBook = function () {
    rl.question("Enter date of book to search ex:2024 : ", function (answer) {
        var newSavedBook = savedBook.filter(function (existingBook) { return existingBook.date == parseInt(answer); });
        if (newSavedBook.length === 0) {
            console.log("No results for for year ".concat(answer));
        }
        else {
            console.log(newSavedBook);
        }
        main();
    });
};
var main = function () {
    rl.question("1-add, 2-remove, 3-search, 4 print: ", function (answer) {
        switch (answer) {
            case "1":
                addBook();
                break;
            case "2":
                removeBook();
                break;
            case "3":
                searchBook();
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
