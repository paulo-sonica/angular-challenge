import { Component, EventEmitter, Output, inject } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent  {  

  #searchService = inject(SearchService);

  // Inject the search value into the search service
  nameSerch(nameValue: string) {    
    this.#searchService.setSearchValue(nameValue);    
  }
  
  
}
