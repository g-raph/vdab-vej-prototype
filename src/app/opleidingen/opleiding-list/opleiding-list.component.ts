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
  filterCategorie = ['Beroepsopleidingen', 'Persoonlijke en professionele groei'];
  filterGratis = ['Gratis opleidingen voor wie geen werk heeft', 'Gratis opleidingen voor iedereen'];
  filterStartdatum = ['December 2024', 'Januari 2025', 'Februari 2025', 'Maart 2025', 'April 2025', 'Mei 2025', 'Juni 2025', 'Juli 2025', 'Augustus 2025', 'September 2025', 'Oktober 2025', 'November 2025', 'December 2025'];
  filterLesmoment = ['Buiten de kantooruren', 'Tijdens de kantooruren'];
  filterLeervorm = ['Afstandsleren', 'Duaal leren', 'Groepsleren', 'Online leren', 'Workshop'];
  filterOrganisator = ['VDAB', 'Andere'];
  filterKnelpuntberoep = ['Ja', 'Nee'];
  filterForm: FormGroup;
  items = [
    { name: 'Apple', filterCategorie: 'Beroepsopleidingen', filterGratis: 'Gratis opleidingen voor wie geen werk heeft', filterStartdatum: 'December 2024', filterLesmoment: 'Buiten de kantooruren' },
    { name: 'Carrot', filterCategorie: 'Persoonlijke en professionele groei', filterGratis: 'Gratis opleidingen voor wie geen werk heeft', filterStartdatum: 'April 2025', filterLesmoment: 'Tijdens de kantooruren' },
    { name: 'Banana', filterCategorie: 'Beroepsopleidingen', filterGratis: 'Gratis opleidingen voor wie geen werk heeft', filterStartdatum: 'December 2024', filterLesmoment: 'Tijdens de kantooruren' },
    { name: 'Broccoli', filterCategorie: 'Persoonlijke en professionele groei', filterGratis: 'Gratis opleidingen voor wie geen werk heeft', filterStartdatum: 'December 2024', filterLesmoment: 'Tijdens de kantooruren' },
    { name: 'Chicken', filterCategorie: 'Beroepsopleidingen', filterGratis: 'Gratis opleidingen voor wie geen werk heeft', filterStartdatum: 'Mei 2025', filterLesmoment: 'Tijdens de kantooruren' },
    { name: 'Beef', filterCategorie: 'Persoonlijke en professionele groei', filterGratis: 'Gratis opleidingen voor iedereen', filterStartdatum: 'September 2025', filterLesmoment: 'Buiten de kantooruren' }
  ];


  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filterCategorie: this.fb.group(
        this.filterCategorie.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
      filterGratis: this.fb.group(
        this.filterGratis.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
      filterStartdatum: this.fb.group(
        this.filterStartdatum.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
      filterLesmoment: this.fb.group(
        this.filterLesmoment.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
    });
  }

  get filteredItems() {
    const selectedCategories = Object.keys(this.filterForm.value.filterCategorie)
      .filter(category => this.filterForm.value.filterCategorie[category]);
    const selectedGratis = Object.keys(this.filterForm.value.filterGratis)
      .filter(category => this.filterForm.value.filterGratis[category]);
    const selectedStartdatum = Object.keys(this.filterForm.value.filterStartdatum)
      .filter(category => this.filterForm.value.filterStartdatum[category]);
    const selectedLesmoment = Object.keys(this.filterForm.value.filterLesmoment)
      .filter(category => this.filterForm.value.filterLesmoment[category]);

    return this.items.filter(item => {
      // Filter by category
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.filterCategorie);
      const matchesGratis = selectedGratis.length === 0 || selectedGratis.includes(item.filterGratis);
      const matchesStartdatum = selectedStartdatum.length === 0 || selectedStartdatum.includes(item.filterStartdatum);
      const matchesLesmoment = selectedLesmoment.length === 0 || selectedLesmoment.includes(item.filterLesmoment);

      return matchesCategory && matchesGratis && matchesStartdatum && matchesLesmoment;
    });
  }
}
