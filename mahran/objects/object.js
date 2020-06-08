let firstBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};
let secondBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

// Reading a property value with dot notation
console.log(`${firstBook.title} by ${firstBook.author}`);

// Chaing an object property value using dot notation
firstBook.title = "Animal Farm";

let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`);
};

getSummary(firstBook);

getSummary(secondBook);
