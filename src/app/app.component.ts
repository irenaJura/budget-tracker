import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetEntry } from './budget-entry.interface';
import { BudgetEntryEditorComponent } from './budget-entry-editor/budget-entry-editor.component';
import { BudgetEntryComponent } from './budget-entry/budget-entry.component';
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';
import { delay, from, Observable, Subscription } from 'rxjs';

const budgetEntriesData: BudgetEntry[] = [
  { id: 1, description: 'Groceries', amount: 250 },
  { id: 2, description: 'Rent', amount: 1200 },
  { id: 3, description: 'Utilities', amount: 300 },
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BudgetEntryComponent,
    BudgetEntryEditorComponent,
    BudgetOverviewComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  status = 'Fetching Data.';
  budgetEntries: BudgetEntry[] = [];
  budgetSubscription!: Subscription;

  ngOnInit() {
    this.budgetSubscription = this.simulateDataRetrieval().subscribe((data) => {
      this.budgetEntries.push(data);
      this.status = 'Application Loaded';
    });
  }

  deleteEntry(entryId: number) {
    // todo: define body to delete entry
  }
  simulateDeleteEntry(entryId: number) {
    // Simulating async operation using RxJS
    const updatedEntries = this.budgetEntries.filter(
      (entry) => entry.id !== entryId
    );
    // todo: return observable
  }

  simulateDataRetrieval(): Observable<BudgetEntry> {
    return from(budgetEntriesData).pipe(delay(2000));
  }

  ngOnDestroy() {
    if (this.budgetSubscription) this.budgetSubscription.unsubscribe();
  }
}
