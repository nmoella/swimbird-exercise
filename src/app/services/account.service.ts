import {Inject, Injectable} from '@angular/core';
import {Account} from "./account";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] | undefined;

  constructor(
    public http: HttpClient,
    @Inject('AccountBackendUrl') private accountBackendUrl: string
  ) {}

  public async getAccounts(): Promise<Account[]> {
    if (this.accounts == undefined) {
      this.accounts = await firstValueFrom(this.http.get<Account[]>(this.accountBackendUrl));
      console.log(`loaded ${this.accounts.length} accounts`);
    }

    return this.accounts;
  }

  public isLoaded(): boolean {
    return this.accounts != undefined;
  }
}
