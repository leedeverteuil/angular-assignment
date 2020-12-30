import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import BooksJson from '../../assets/books.json';


@Component({

	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']

})

export class BookListComponent implements OnInit {

	@Input()
	currentSearchQuery: string = '';

	// Fields
	booksArray: Array<any> = BooksJson.Books.slice();


	ngOnInit(): void {}


	ngOnChanges(changes: SimpleChanges): void {

		// Get object for search changes
		let searchChange = changes['currentSearchQuery'];

		if (searchChange) {

			// Perform filter functionality
			this.filterBooks();

		}
	}


	filterBooks(): void {

		// Retrieve search string
		let searchString = this.currentSearchQuery;

		// Check if null or blank
		if (searchString && searchString !== '') {

			// Make container for books
			let newBooksArray: Array<any> = [];

			// Iterate through books from json
			BooksJson.Books.forEach(function(book) {

				// Perform search
				let bookName = book.Name.toLowerCase();
				let authorName = book.Author.toLowerCase();

				// Format search string
				searchString = searchString.toLowerCase();

				if (bookName.match(searchString) || authorName.match(searchString)) {

					// Add to list
					newBooksArray.push(book);

				}

			});

			this.booksArray = newBooksArray;

		}

		// Search string empty, show all books
		else {

			this.booksArray = BooksJson.Books.slice();

		}
	}
}
