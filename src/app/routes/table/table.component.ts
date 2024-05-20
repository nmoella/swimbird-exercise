import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Account} from "../../services/account";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {AccountTableComponent} from "../../components/account-table/account-table.component";
import {Store} from "@ngrx/store";
import {loadAccounts} from "../../state/account/account.actions";
import {selectAccounts} from "../../state/account/account.selectors";
import {Subscription} from "rxjs";
import {AppState} from "../../state/app.state";

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatProgressSpinner,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    MatSortHeader,
    MatSort,
    AccountTableComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, OnDestroy {
  private selectorSubscription?: Subscription;
  protected dataSource?: MatTableDataSource<Account>;
  protected loading: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.selectorSubscription = this.store.select(selectAccounts).subscribe(accounts => {
      if (accounts == undefined) {
        this.dataSource = undefined;
      } else {
        this.dataSource = new MatTableDataSource(accounts);
      }

      this.loading = false;
    });
  }

  public ngOnDestroy(): void {
    this.selectorSubscription?.unsubscribe();
  }

  public loadAccounts(): void {
    this.loading = true;
    this.store.dispatch(loadAccounts());
  }

  public isLoaded(): boolean {
    return this.dataSource != undefined;
  }
}
