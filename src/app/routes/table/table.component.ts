import {Component} from '@angular/core';
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
  MatTable
} from "@angular/material/table";
import {CdkTableDataSourceInput} from "@angular/cdk/table";

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
    MatRow
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  protected loading: boolean = false;
  dataSource: CdkTableDataSourceInput<Account> = [];
  displayedColumns: string[] = ['id', 'accountId', 'bank', 'balance', 'currency'];

  constructor(
    private accountService: AccountService
  ) {}

  public async loadAccounts(): Promise<void> {
    this.loading = true;
    this.dataSource = await this.accountService.getAccounts();
    this.loading = false;
  }

  public isLoaded(): boolean {
    return this.accountService.isLoaded();
  }
}
