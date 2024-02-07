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
// Function to prompt the user for book details and save them into an object
var bookDetails = function () {
    rl.question("Enter Book Title: ", function (title) {
        rl.question("Enter Book Author: ", function (author) {
            rl.question("Enter Book Date: ", function (date) {
                var book = {
                    title: title,
                    author: author,
                    date: date,
                };
                main();
            });
        });
    });
};
// Print Books
var printBooks = function (book) {
    console.log(book);
};
var main = function () {
    rl.question("1-add, 2-remove, 3-search, 4 print: ", function (answer) {
        switch (answer) {
            case "1":
                bookDetails();
                break;
            case "2":
                console.log("Remove");
                break;
            case "3":
                console.log("Search");
                break;
            case "4":
                console.log("Print");
                break;
            default:
                console.log("Invalid answer!");
                rl.close();
        }
    });
};
main();
