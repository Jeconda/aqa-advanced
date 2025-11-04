export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
    printInfo() {
        console.log(`${this._name}, ${this._author}, ${this._year}`)
    }
    get name() {
    return this._name;
    }
    set name(newName) {
        if(typeof newName === 'string' && newName.trim().length > 0) {
            this._name = newName;}
            else
            {console.error('Error: "name" can not be empty');

            }
    
  }
  get author() {
    return this._author;
  }
  set author(newAuthor) {
    if(typeof newAuthor ==='string' && newAuthor.trim().length > 0) {
        this._author = newAuthor;
    } else {
        console.error('Error: "author" can not be empty');
    }
  }
  get year() {
    return this._year;
  }
  set year(newYear){
    const currentYear = new Date().getFullYear();
    if(typeof newYear === 'number' && newYear > 0 && newYear < currentYear) {
        this._year = newYear;
    } else {
        console.error('Error: "year" must be a positive number and not a future date');
    }
  }
  static findOldestBook(booksArray) {
    if (!Array.isArray(booksArray) || booksArray.length === 0) {
      console.error("Error: Please provide a non-empty array of books");
      return null;
    }
    let oldestBook = booksArray[0];

    for (let i = 1; i < booksArray.length; i++) {
      if (booksArray[i].year < oldestBook.year) {
        oldestBook = booksArray[i];
      }
    }

    return oldestBook;
}}
  

  
