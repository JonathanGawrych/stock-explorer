import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefData } from 'iex-service';
import { CompanyComponent } from 'routes/company';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
	private static symbols: Promise<RefData.Symbols.Response[]>;
	private filteredSymbols: Promise<RefData.Symbols.Response[]>;
	private input: string;
	private top: RefData.Symbols.Response;

	constructor(private router: Router) {}

	static sortSymbols(symbols: RefData.Symbols.Response[], search: RegExp) {
		return symbols.sort((s1, s2) => {
			let s1Search = s1.symbol.search(search);
			let s2Search = s2.symbol.search(search);

			// If neither were found, fall back to company name
			if (s1Search === -1 && s2Search === -1) {
				s1Search = s1.name.search(search);
				s2Search = s2.name.search(search);
			}

			// If s2Search doesn't match, make s1 < s2
			if (s2Search === -1)
				return -1;

			// If s1Search doesn't match, make s2 < s1
			if (s1Search === -1)
				return 1;

			// If the position match, go alphabetical
			if (s1Search - s2Search === 0)
				return s1.symbol.localeCompare(s2.symbol);

			// The better match is closer to the beginning
			return s1Search - s2Search;
		});
	}

	inputChange($event) {
		this.filteredSymbols = SearchComponent.symbols.then(symbols => {
			// Search for the user's input
			// https://stackoverflow.com/a/3561711/1248889
			const userInputEscaped = this.input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			const searchRegex = new RegExp(this.input, 'i');

			// Only show results that match
			const filtered = symbols.filter(symbol => symbol.symbol.search(searchRegex) !== -1);

			// If we have less than 10 results, add company name results
			if (filtered.length < 10) {
				// Limit to filters that match and are not already in the list
				const filteredName = symbols.filter(symbol => {
					return symbol.name.search(searchRegex) !== -1
						&& filtered.indexOf(symbol) === -1;
				});

				// Concatinate the name filtered list into the filtered list
				Array.prototype.push.apply(filtered, filteredName);
			}

			// Sort and limit to ten items
			const filteredAndSorted = SearchComponent.sortSymbols(filtered, searchRegex).slice(0, 10);

			// Save the top result which will be used on navigating
			this.top = filteredAndSorted[0];

			// InputEvents are typing, pasting, etc.
			// If we got into the input callback, but have a non-InputEvent then
			// we have a datasource event. (generally generic "Event")
			// IE/Edge InputEvent will be not be defined at all. They'll have to hit enter.
			if (typeof InputEvent !== 'undefined' && !($event instanceof InputEvent)) {
				// We'll immediately go there
				this.inputSubmit();

				// And remove focus
				$event.target.blur();
			}

			return filteredAndSorted;
		});
	}

	inputClear() {
		console.log('here');
		this.input = '';
		this.filteredSymbols = Promise.resolve([]);
	}

	inputSubmit() {
		if (this.top == null)
			return;

		this.router.navigate(CompanyComponent.path(this.top.symbol));
	}

	ngOnInit() {
		// Init static only needed once
		if (SearchComponent.symbols == null)
			SearchComponent.symbols = RefData.Symbols.get();

		// Init member with the list
		this.filteredSymbols = SearchComponent.symbols.then(symbols => symbols.slice(0, 10));
	}

}

import { FormsModule } from '@angular/forms';
import metadata from 'app.module.metadata';
metadata.declarations.push(SearchComponent);
metadata.imports.push(FormsModule);
