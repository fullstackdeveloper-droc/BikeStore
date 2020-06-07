import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Page } from 'src/app/components/widgets/pagination/pagination-page';

@Component({
  selector: 'paginator-widget',
  templateUrl: './paginator-widget.component.html',
  styleUrls: ['./paginator-widget.component.css']
})
export class PaginatorComponent {
  @Input() page: Page<any>;
  @Output() pageChange = new EventEmitter<string>();
}
