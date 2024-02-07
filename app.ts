import { title } from "process";
import * as readline from "readline";

let greetings: string = "Welcome to Library! ";
console.log(greetings);

let command: string = "Enter a number for operation to do";
console.log(command);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define Book type
type Book = {
  title: string;
  author: string;
  date: string;
};

// Function to prompt the user for book details and save them into an object
const bookDetails = () => {
  rl.question("Enter Book Title: ", (title) => {
    rl.question("Enter Book Author: ", (author) => {
      rl.question("Enter Book Date: ", (date: any) => {
        const book: Book = {
          title,
          author,
          date,
        };
        main();
      });
    });
  });
};

// Print Books
const printBooks = (book) => {
  console.log(book);
};

const main = () => {
  rl.question("1-add, 2-remove, 3-search, 4 print: ", (answer) => {
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
