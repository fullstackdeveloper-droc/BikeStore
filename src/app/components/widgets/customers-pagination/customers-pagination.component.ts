import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs';
import { Page } from '../../models/page';
import { Pony, PonyService } from '../pagination/pagination-pony.service';
import { debounceTime, startWith, switchMap, share, map } from 'rxjs/operators';
import { Customer } from '../../models/customer';

export class CustomersPaginationComponent {
  filterForm: FormGroup;
  page: Observable<Page<Customer>>;
  pageUrl = new Subject<string>();

  constructor(
    private ponyService: PonyService
  ) {
    this.filterForm = new FormGroup({
      is_available: new FormControl(),
      search: new FormControl()
    });

    const filterValue = this.filterForm.valueChanges.pipe(
      debounceTime(200),
      startWith(this.filterForm.value),
    );
    this.page = merge(filterValue, this.pageUrl).pipe(
      switchMap(urlOrFilter => this.ponyService.list(urlOrFilter)),
      share()
    );
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }
}
