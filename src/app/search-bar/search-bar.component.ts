import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css']

})

export class SearchBarComponent {

	// Fields
	searchQuery: string = '';

	// Communication with parent component
	@Output() public searchRequest: EventEmitter<string> = new EventEmitter();


	// Function for sending search request
	searchValueChanged() {

		this.searchRequest.emit(this.searchQuery);

	}
}
