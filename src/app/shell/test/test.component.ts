import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  // Define the form group
  form: FormGroup;

  // Child task names
  taskNames = ['Child task 1', 'Child task 2', 'Child task 3'];

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.form = this.fb.group({
      parent: [false], // Parent checkbox
      children: {
        0: [false],
        1: [false],
        2: [false],
      }
    });
  }

  // Getter for the child checkboxes FormArray
  get childTasks(): FormArray {
    return this.form.get('children') as FormArray;
  }

  // Handle parent checkbox change
  onParentChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    // Update all child checkboxes based on the parent checkbox state
    this.childTasks.controls.forEach((control) => control.setValue(isChecked));
  }

  // Handle child checkbox change
  onChildChange(): void {
    const allChecked = this.childTasks.controls.every((control) => control.value);
    const someChecked = this.childTasks.controls.some((control) => control.value);

    // Update parent checkbox state
    this.form.get('parent')?.setValue(allChecked, { emitEvent: false });
    (this.form.get('parent') as any).indeterminate = !allChecked && someChecked; // Set indeterminate state
  }
}
