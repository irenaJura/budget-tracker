import { Component, Input } from '@angular/core';
import { BudgetEntry } from '../budget-entry.interface';

@Component({
  selector: 'app-budget-overview',
  standalone: true,
  imports: [],
  templateUrl: './budget-overview.component.html',
})
export class BudgetOverviewComponent {
  @Input() entries: BudgetEntry[] = [];
  status = '';

  // todo: define ngOnInit
}
