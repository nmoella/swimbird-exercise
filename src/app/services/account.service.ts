import {Inject, Injectable} from '@angular/core';
import {Account} from "./account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    public http: HttpClient,
    @Inject('AccountBackendUrl') private accountBackendUrl: string
  ) {}

  public getAccounts(): Observable<Account[]> {
    console.log('loading accounts');
    return this.http.get<Account[]>(this.accountBackendUrl);
  }
}
