import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchValue: ReplaySubject<string> = new ReplaySubject<string>(1);

  // Set and 'Emit' the search value
  setSearchValue(value: string): void {
    this.searchValue.next(value);
  }

}
