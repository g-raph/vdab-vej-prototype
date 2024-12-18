import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './filter-dropdown.component.html',
  styleUrl: './filter-dropdown.component.scss'
})
export class FilterDropdownComponent {
  @Input() filters: string[] = [];
  @Input() title: string = 'Title';
  @Input() groupName: string = '';
}
