import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-opleiding-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './opleiding-list.component.html',
  styleUrl: './opleiding-list.component.scss'
})
export class OpleidingListComponent {
  items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Broccoli', category: 'Vegetable' },
    { name: 'Chicken', category: 'Meat' },
    { name: 'Beef', category: 'Meat' }
  ];

  categories = ['Fruit', 'Vegetable', 'Meat'];
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      categories: this.fb.group(
        this.categories.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      )
    });
  }

  get filteredItems() {
    const selectedCategories = Object.keys(this.filterForm.value.categories)
      .filter(category => this.filterForm.value.categories[category]);

    if (selectedCategories.length === 0) {
      return this.items;
    }
    return this.items.filter(item => selectedCategories.includes(item.category));
  }
}
