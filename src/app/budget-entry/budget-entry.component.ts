import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { BudgetEntry } from '../budget-entry.interface';
import { BudgetEntryEditorComponent } from '../budget-entry-editor/budget-entry-editor.component';

@Component({
  selector: 'app-budget-entry',
  standalone: true,
  imports: [BudgetEntryEditorComponent],
  templateUrl: './budget-entry.component.html',
  styleUrl: './budget-entry.component.css',
})
export class BudgetEntryComponent implements AfterContentInit {
  @Input() entry: BudgetEntry = { id: 0, description: '', amount: 0 };
  @Output() deleteEntry = new EventEmitter<number>();
  status = '';
  @ViewChild(BudgetEntryEditorComponent)
  budgetEntryEditor!: BudgetEntryEditorComponent;
  @ContentChild('extraButton') extraButton!: ElementRef;

  resetEditor() {
    this.budgetEntryEditor.resetEntry();
    this.budgetEntryEditor.status = 'Entry reset to default.';
  }

  delete() {
    this.deleteEntry.emit(this.entry.id);
    this.status = 'Entry deleted.';
  }

  ngAfterContentInit(): void {
    this.status = 'Budget entry component initialized.';
    if (this.extraButton) {
      this.status = 'Extra button is provided.';
      this.extraButton.nativeElement.innerText = 'Extra Button Modified';
    }
  }
}
