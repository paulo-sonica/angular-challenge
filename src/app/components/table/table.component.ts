import { Component, Input, OnChanges } from '@angular/core';
import { ITableData } from 'src/Interfaces/ITableData';
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

  ngOnChanges(): void {
    this.sortData();
  }

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

  sortTable(sortColumn: columns): void {
    if (this.sortColumn === sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = sortColumn;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }
}
