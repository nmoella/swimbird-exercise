import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Account} from "../../services/account";
import {NgIf} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-account-table',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    NgIf,
    MatHeaderCellDef,
    MatPaginator
  ],
  templateUrl: './account-table.component.html',
  styleUrl: './account-table.component.scss'
})
export class AccountTableComponent implements AfterViewInit {
  protected displayedColumns: string[] = ['id', 'accountId', 'bank', 'balance', 'currency'];
  @Input({required: true}) dataSource!: MatTableDataSource<Account>;

  constructor(
    private liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;

  ngOnChanges() {
    console.log(this.dataSource.data)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  async announceSort(sort: Sort): Promise<void> {
    if (sort.direction) {
      await this.liveAnnouncer.announce(`Sorting by ${sort.active} ${sort.direction}`);
    } else {
      await this.liveAnnouncer.announce(`Sorting cleared`);
    }
  }
}
