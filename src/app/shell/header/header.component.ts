import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BreadcrumbComponent, NgIf, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  showSearchForm = false;
  showMenu = false;
  showSettings = false;
  showSubMenu = false;
  showCloseBtn = false;
  form: FormGroup;
  fontForm: FormGroup;
  searchTerm = '';
  isHome: boolean = false;
  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      text: ''
    });

    this.form.get('text')!
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(dataValue => {
        this.openSubMenu(dataValue);
      });

    this.fontForm = fb.group({
      optionfontfamily: [''],
      optionfontsize: ['']
    });
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isHome = event.url === '/';
      });
  }
  onOptionChangeFontForm(value: string) {
    document.body.classList.remove('font-inter');
    document.body.classList.remove('font-opensans');
    document.body.classList.remove('font-comicsans');
    if (value !== '') {
      document.body.classList.toggle(value);
    }
    this.toggleSettings();
  }
  onOptionChangeFontSize(value: string) {
    document.body.classList.remove('smaller-font');
    if (value !== '') {
      document.body.classList.toggle(value);
    }
    this.toggleSettings();
  }
  toggleSearchForm() {
    this.showSearchForm = !this.showSearchForm;
    this.resetField();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  toggleSettings() {
    this.showSettings = !this.showSettings;
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
