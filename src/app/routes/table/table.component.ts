import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {AccountService} from "../../services/account.service";
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
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {AccountTableComponent} from "../../components/account-table/account-table.component";

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
export class TableComponent {
  protected loading: boolean = false;
  protected dataSource: MatTableDataSource<Account> | undefined;

  constructor(
    private accountService: AccountService,
  ) {}

  public async loadAccounts(): Promise<void> {
    this.loading = true;

    if (this.isLoaded()) {
      await this.accountService.reloadAccounts();
    }
    
    this.dataSource = new MatTableDataSource(await this.accountService.getAccounts());
    this.loading = false;
  }

  public isLoaded(): boolean {
    return this.accountService.isLoaded() && this.dataSource != undefined;
  }
}
