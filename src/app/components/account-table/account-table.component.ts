import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
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
import {AppState} from "../../state/app.state";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {selectSort} from "../../state/account-sort/account-sort.selectors";
import {setSort} from "../../state/account-sort/account-sort.actions";

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
export class AccountTableComponent implements OnInit, OnDestroy, AfterViewInit {
  private selectorSubscription?: Subscription;

  protected sort: Sort = {direction: '', active: ''};
  protected displayedColumns: string[] = ['id', 'accountId', 'bank', 'balance', 'currency'];

  @Input({required: true}) dataSource!: MatTableDataSource<Account>;

  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private store: Store<AppState>,
  ) {}

  @ViewChild(MatSort) matSort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;

  ngOnInit() {
    this.selectorSubscription = this.store.select(selectSort).subscribe(sort => {
      if (sort) {
        this.sort.active = sort.active;
        this.sort.direction = sort.direction;
      }
    });
  }

  ngOnDestroy() {
    this.selectorSubscription?.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.paginator;

    this.matSort.sortChange.subscribe(sort => {
      console.log('loaded table sort: ', sort);
      this.store.dispatch(setSort({ sort }));
    });
  }

  async announceSort(sort: Sort): Promise<void> {
    if (sort.direction) {
      await this.liveAnnouncer.announce(`Sorting by ${sort.active} ${sort.direction}`);
    } else {
      await this.liveAnnouncer.announce(`Sorting cleared`);
    }
  }
}
