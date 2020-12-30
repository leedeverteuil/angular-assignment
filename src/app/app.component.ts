import { Component } from '@angular/core';

@Component({

	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']

})

export class AppComponent {

	// Fields
	title: string = 'BookApp';
	searchQuery: string = '';


	handleSearchRequest(newSearchQuery:string) {

		this.searchQuery = newSearchQuery;

	}
}
