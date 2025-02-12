import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetEntry } from '../budget-entry.interface';

@Component({
  selector: 'app-budget-entry-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './budget-entry-editor.component.html',
})
export class BudgetEntryEditorComponent implements OnInit {
  @Input() entry: BudgetEntry = { id: 0, description: '', amount: 0 };
  status = '';

  ngOnInit() {
    this.status = 'Budget Entry Editor Initialized';
  }

  resetEntry() {
    this.entry.description = '';
    this.entry.amount = 0;
    this.status = 'Fields reset.';
  }
}
