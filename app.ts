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
  date: number;
};

//Function to prompt the user for book details and save them into an object
const getBookDetails = (callback: (book: Book) => void) => {
  rl.question("Enter Book Title: ", (title) => {
    rl.question("Enter Book Author: ", (author) => {
      rl.question("Enter Book Date: ", (date: any) => {
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
  getBookDetails((book) => {
    console.log("Book details:");
    console.log("Title:", book.title);
    console.log("Author:", book.author);
    console.log("Date:", book.date);
    savedBook.push(book);
  });
};

//Store books in savedBook array
let savedBook: Book[] = [];

//Display books saved in savedBook array
const displayBook = () => {
  savedBook.sort((existingBook, newBook) => {
    if (existingBook.title !== newBook.title) {
      return existingBook.title.localeCompare(newBook.title);
    } else {
      return newBook.date - existingBook.date;
    }
  });

  console.log(savedBook);
  main();
};

//Remove books saved in savedBook array using Splice
const removeBook = () => {
  rl.question("Enter date of book to remove ex:2024 : ", (answer) => {
    let ctr:number = 0;
    let ctrElse:number = 10;
    savedBook.forEach((existingBook, index) => {
      if (existingBook.date == parseInt(answer)) {
        savedBook.splice(index, 1);
        console.log(ctr);
        ctr++
      }
      else{
        console.log(ctrElse);
        ctrElse++;
      }
    });    
    
    // savedBook = savedBook.filter(
    //   (existingBook) => existingBook.date != parseInt(answer)
    // );


    console.log(`Successfully deleted book with year ${answer}`);
    console.log(savedBook);
    main();
  });
};

//Search books saved in savedBook array and display the results
const searchBook = () => {
  rl.question("Enter date of book to search ex:2024 : ", (answer) => {
    let newSavedBook = savedBook.filter(
      (existingBook) => existingBook.date === parseInt(answer)
    );

    if (newSavedBook.length === 0) {
      console.log(`No results for year ${answer}`);
    } else {
      console.log(newSavedBook);
    }
    main();
  });
};

const main = () => {
  rl.question("1-add, 2-remove, 3-search, 4 print: ", (answer) => {
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
