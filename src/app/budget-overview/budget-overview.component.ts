import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry } from '../budget-entry.interface';

@Component({
  selector: 'app-budget-overview',
  standalone: true,
  imports: [],
  templateUrl: './budget-overview.component.html',
})
export class BudgetOverviewComponent implements OnInit {
  @Input() entries: BudgetEntry[] = [];
  status = '';

  ngOnInit() {
    this.status = 'Budget Overview Loaded';
  }
}
