import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({

	declarations: [
		AppComponent,
		SearchBarComponent,
		BookListComponent,
	],

	imports: [
		BrowserModule,
		FormsModule
	],

	providers: [],
	bootstrap: [AppComponent]

})

export class AppModule { }
