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


//Function to prompt the user for book details and save them into an object
const getDetails = (callback: (book: Book) => void) => {
  rl.question("Enter Book Title: ", (title) => {
    rl.question("Enter Book Author: ", (author) => {
      rl.question("Enter Book Date: ", (date) => {
        const book: Book = {
          title,
          author,
          date,
        };
        callback(book); // Call the callback function with the created book object
        main();
      });
    });
  });
};


const addBook = () => {
  getDetails((book) => {
    console.log('Book details:');
    console.log('Title:', book.title);
    console.log('Author:', book.author);
    console.log('Date:', book.date);
    savedBook.push(book);
  });
}

//Store books in savedBook array
let savedBook: Book[] = [];

//Display books saved in savedBook array
 const displayBook = () => {
  console.log(savedBook.sort());
  main();
};



const main = () => {
  rl.question("1-add, 2-remove, 3-search, 4 print: ", (answer) => {
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