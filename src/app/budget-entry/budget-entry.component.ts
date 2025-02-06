import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BudgetEntry } from '../budget-entry.interface';
import { BudgetEntryEditorComponent } from '../budget-entry-editor/budget-entry-editor.component';

@Component({
  selector: 'app-budget-entry',
  standalone: true,
  imports: [BudgetEntryEditorComponent],
  templateUrl: './budget-entry.component.html',
  styleUrl: './budget-entry.component.css',
})
export class BudgetEntryComponent {
  @Input() entry: BudgetEntry = { id: 0, description: '', amount: 0 };
  @Output() deleteEntry = new EventEmitter<number>();
  status = '';
  // todo: define viewchild
  // todo: define content child

  resetEditor() {
    // todo: define reset of entry editor
  }

  delete() {
    this.deleteEntry.emit(this.entry.id);
    this.status = 'Entry deleted.';
  }
}
