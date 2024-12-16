import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, NgIf, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showSearchForm = false;
  showMenu = false;
  showSubMenu = false;
  showCloseBtn = false;
  form: FormGroup;
  searchTerm = '';
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      text: ''
    });

    this.form.get('text')!
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(dataValue => {
        this.openSubMenu(dataValue);
      });
  }
  toggleSearchForm() {
    this.showSearchForm = !this.showSearchForm;
    this.resetField();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  resetField() {
    this.form.get('text')?.setValue('');
  }
  openSubMenu(dataValue:string) {
    if (dataValue !== '') {
      this.showSubMenu = true;
      this.showCloseBtn = true;
      this.searchTerm = dataValue;
    } else {
      this.showSubMenu = false;
      this.showCloseBtn = false;
      this.searchTerm = '';
    }
  }
}
