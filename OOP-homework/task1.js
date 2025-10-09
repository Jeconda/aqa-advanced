import {Book} from './Book.js';
import {EBook} from './EBook.js';

  const book1 = new Book("In the fog zone", "Aleksei Gravitskii", 2009);
  book1.printInfo()
  const book2 = new Book("In the fire zone", "Aleksei Kalugin", 2006);
  book2.printInfo()
  const book3 = new Book("In the water zone", "Aleksei Gravitskii", 2007);
  book3.printInfo()
  const ebook1 = new EBook("Digital Future", "John Doe", 2020, "pdf");

  book1.printInfo();
  book2.printInfo();
  book3.printInfo();
ebook1.printInfo();

const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldestBook(allBooks);
console.log("Oldest book:");
oldest.printInfo();
