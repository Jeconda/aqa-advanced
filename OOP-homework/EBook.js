import { Book } from './Book.js';
export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(newFileFormat) {
    const allowedFormats = ['PDF', 'DOC', 'DOCX', 'EPUB', 'MOBI', 'TXT', 'JPEG', 'PNG', 'MP3'];
if (allowedFormats.includes(newFileFormat.toUpperCase())) {
  this._fileFormat = newFileFormat.toUpperCase();
} else {
  console.error(`Error: Unsupported file format "${newFileFormat}"`);
}}
    printInfo() {
        console.log(`${this.name}, ${this.author}, ${this.year}, ${this.fileFormat}`)
    }
}