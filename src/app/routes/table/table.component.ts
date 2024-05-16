import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {AccountService} from "../../services/account.service";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Account} from "../../services/account";

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatProgressSpinner
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  protected loading: boolean = false;

  constructor(
    private accountService: AccountService
  ) {}

  public async loadAccounts(): Promise<Account[]> {
    this.loading = true;
    let accounts: Account[] = await this.accountService.getAccounts();
    this.loading = false;

    return accounts;
  }

  public isLoaded(): boolean {
    return this.accountService.isLoaded();
  }
}
