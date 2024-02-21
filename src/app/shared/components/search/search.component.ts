import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="header-search-container">
      <div class="header-search">
        <form (submit)="onSearch(searchQuery.value); false;">
          <input class="input" #searchQuery placeholder="Search here">
          <button class="search-btn">Search</button>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./search.component.css'] // Adjust the path to your CSS file
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(query: string) {
    this.searchEvent.emit(query);
  }
}
