import { Component, Input, OnChanges, inject } from '@angular/core';
import { ITableData } from 'src/app/Interfaces/ITableData';
import { SearchService } from 'src/app/services/search.service';
import { columns } from 'src/app/types/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() sortColumn: columns = 'firstname';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Input() data: ITableData[] = [];

  searchService = inject(SearchService);

  // Store the data to be used when searching
  storedData: ITableData[] = [];

  ngOnInit(): void {    
    this.searchNameServiceSubscribe();
    this.storedData = this.data;
  }

  ngOnChanges(): void {    
    this.storedData = this.data;
  }  

  // Subscribe to the search service
  private searchNameServiceSubscribe() {
    this.searchService.searchValue.subscribe((name: string) => {
      this.nameFilter(name);
    });  
  }

  // Get the sort direction, column and sort the data
  sortTable(sortColumn: columns): void {
    if (this.sortColumn === sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = sortColumn;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }

  // Sort the data using a compare function and the sortColumn and sortDirection
  private sortData(): void {
    this.data = this.data.sort((a, b) => {
      const compareValueA = a[this.sortColumn];
      const compareValueB = b[this.sortColumn];

      if (compareValueA < compareValueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }

      if (compareValueA > compareValueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }
  

  // Filter the data by firstname
  nameFilter(name: string): void {    

    if (name == '') {
      this.data = this.storedData;          
      return;
    }

    this.data = this.storedData.filter((item) => {
      return item.firstname.toLowerCase().startsWith(name.toLowerCase());
    });
    
  }
}
