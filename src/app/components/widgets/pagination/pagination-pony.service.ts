import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Page } from "../../models/page";
import { queryPaginated } from "./pagination-queryPaginated";
import { Customer } from "../../models/customer";

export class Pony {
  id: number;
  is_available: boolean;
  name: string;
}

@Injectable()
export class PonyService {
  baseUrl = 'https://localhost:44356/api/Customers/';

  constructor(
    private http: HttpClient
  ) { }

  list(urlOrFilter?: string | object): Observable<Page<Customer>> {
    let ret = queryPaginated<Customer>(this.http, this.baseUrl, urlOrFilter);
    console.log(ret);
    return ret;
  }
}
