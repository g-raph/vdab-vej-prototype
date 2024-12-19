import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OpleidingTeaserComponent } from '../opleiding-teaser/opleiding-teaser.component';

export interface TreeNode {
  name: string;
  checked: boolean;
  expanded: boolean;
  children?: TreeNode[];
}

@Component({
  selector: 'app-opleiding-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, OpleidingTeaserComponent, NgIf],
  templateUrl: './opleiding-list.component.html',
  styleUrl: './opleiding-list.component.scss',
})
export class OpleidingListComponent {
  filterCategorie: TreeNode[] = [
    {
      name: 'Beroepsopleidingen',
      checked: false,
      expanded: false,
      children: [
        { name: 'Apple', checked: false, expanded: false },
      ]
    },
    {
      name: 'Persoonlijke en professionele groei',
      checked: false,
      expanded: false,
      children: [
        { name: 'Talen', checked: false, expanded: false },
        { name: 'Communicatie', checked: false, expanded: false },
        { name: 'Digitale vaardigheden', checked: false, expanded: false },
        { name: 'Persoonlijke vaardigheden', checked: false, expanded: false },
        { name: 'Professionele vaardigheden', checked: false, expanded: false },
      ]
    }
  ];
  filterGratis = [
    'Gratis opleidingen voor wie geen werk heeft',
    'Gratis opleidingen voor iedereen',
  ];
  filterStartdatum = [
    'December 2024',
    'Januari 2025',
    'Februari 2025',
    'Maart 2025',
    'April 2025',
    'Mei 2025',
    'Juni 2025',
    'Juli 2025',
    'Augustus 2025',
    'September 2025',
    'Oktober 2025',
    'November 2025',
    'December 2025',
  ];
  filterLesmoment = ['Buiten de kantooruren', 'Tijdens de kantooruren'];
  filterLeervorm = [
    'Afstandsleren',
    'Duaal leren',
    'Groepsleren',
    'Online leren',
    'Workshop',
  ];
  filterOrganisator = ['VDAB', 'Andere'];
  filterKnelpuntberoep = ['Ja', 'Nee'];
  filterForm: FormGroup;
  items = [
    {
      name: 'Kapper/Kapster',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Apple',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Buiten de kantooruren',
      filterLeervorm: 'Afstandsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Kapper',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Apple',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'April 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Nederlands - Nederlandse spelling',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Talen',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Assertiviteit in de werksituatie',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Persoonlijke vaardigheden',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Barbier',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Apple',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Online leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Powerpoint voor managers',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Professionele vaardigheden',
      filterGratis: 'Gratis opleidingen voor iedereen',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterLeervorm: 'Workshop',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Leren werken met een computer',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Barbier',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Apple',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Online leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Succesvol presenteren',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Gratis opleidingen voor iedereen',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterLeervorm: 'Workshop',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Barbier voor vrouwen',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Apple',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterLeervorm: 'Online leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
  ];

  showFiltersCategorie = true;
  showFiltersGratis = true;
  showFiltersStartdatum = false;
  showFiltersLesmoment = false;
  showFiltersLeervorm = false;
  showFiltersOrganisator = false;
  showFiltersKnelpuntberoep = false;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filterCategorie: this.fb.group(
        this.filterCategorie.reduce((acc: any, category: any) => {
          acc[category.name] = false;
          return acc;
        }, {})
      ),
      filterSubCategorieBeroep: this.fb.group(
        this.filterCategorie[0].children?.reduce((acc: any, category: any) => {
          acc[category.name] = false;
          return acc;
        }, {})
      ),
      filterSubCategorieGroei: this.fb.group(
        this.filterCategorie[1].children?.reduce((acc: any, category: any) => {
          acc[category.name] = false;
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
      filterLeervorm: this.fb.group(
        this.filterLeervorm.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
      filterOrganisator: this.fb.group(
        this.filterOrganisator.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
      filterKnelpuntberoep: this.fb.group(
        this.filterKnelpuntberoep.reduce((acc: any, category: any) => {
          acc[category] = false;
          return acc;
        }, {})
      ),
    });
    console.log(this.filterForm)
  }

  countItemsCategorie(category: string) {
    return this.items.filter(item => item.filterCategorie === category).length;
  }
  countItemsSubCategorie(category: string) {
    return this.items.filter(item => item.filterSubCategorie === category).length;
  }
  countItemsGratis(category: string) {
    return this.items.filter(item => item.filterGratis === category).length;
  }
  countItemsStartdatum(category: string) {
    return this.items.filter(item => item.filterStartdatum === category).length;
  }
  countItemsLesmoment(category: string) {
    return this.items.filter(item => item.filterLesmoment === category).length;
  }
  countItemsLeervorm(category: string) {
    return this.items.filter(item => item.filterLeervorm === category).length;
  }
  countItemsOrganisator(category: string) {
    return this.items.filter(item => item.filterOrganisator === category).length;
  }
  countItemsKnelpuntberoep(category: string) {
    return this.items.filter(item => item.filterKnelpuntberoep === category).length;
  }

  get filteredItems() {
    const selectedCategories = Object.keys(
      this.filterForm.value.filterCategorie
    ).filter((category) => this.filterForm.value.filterCategorie[category]);
    const selectedSubCategoriesBeroep = Object.keys(
      this.filterForm.value.filterSubCategorieBeroep
    ).filter((category) => this.filterForm.value.filterSubCategorieBeroep[category]);
    const selectedSubCategoriesGroei = Object.keys(
      this.filterForm.value.filterSubCategorieGroei
    ).filter((category) => this.filterForm.value.filterSubCategorieGroei[category]);
    const selectedGratis = Object.keys(
      this.filterForm.value.filterGratis
    ).filter((category) => this.filterForm.value.filterGratis[category]);
    const selectedStartdatum = Object.keys(
      this.filterForm.value.filterStartdatum
    ).filter((category) => this.filterForm.value.filterStartdatum[category]);
    const selectedLesmoment = Object.keys(
      this.filterForm.value.filterLesmoment
    ).filter((category) => this.filterForm.value.filterLesmoment[category]);
    const selectedLeervorm = Object.keys(
      this.filterForm.value.filterLeervorm
    ).filter((category) => this.filterForm.value.filterLeervorm[category]);
    const selectedOrganisator = Object.keys(
      this.filterForm.value.filterOrganisator
    ).filter((category) => this.filterForm.value.filterOrganisator[category]);
    const selectedKnelpuntberoep = Object.keys(
      this.filterForm.value.filterKnelpuntberoep
    ).filter(
      (category) => this.filterForm.value.filterKnelpuntberoep[category]
    );

    return this.items.filter((item) => {
      // Filter by category
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.filterCategorie);
      const matchesSubCategoryBeroep =
        selectedSubCategoriesBeroep.length === 0 ||
        selectedSubCategoriesBeroep.includes(item.filterSubCategorie);
      const matchesSubCategoryGroei =
        selectedSubCategoriesGroei.length === 0 ||
        selectedSubCategoriesGroei.includes(item.filterSubCategorie);
      const matchesGratis =
        selectedGratis.length === 0 ||
        selectedGratis.includes(item.filterGratis);
      const matchesStartdatum =
        selectedStartdatum.length === 0 ||
        selectedStartdatum.includes(item.filterStartdatum);
      const matchesLesmoment =
        selectedLesmoment.length === 0 ||
        selectedLesmoment.includes(item.filterLesmoment);
      const matchesLeervorm =
        selectedLeervorm.length === 0 ||
        selectedLeervorm.includes(item.filterLeervorm);
      const matchesOrganisator =
        selectedOrganisator.length === 0 ||
        selectedOrganisator.includes(item.filterOrganisator);
      const matchesKnelpuntberoep =
        selectedKnelpuntberoep.length === 0 ||
        selectedKnelpuntberoep.includes(item.filterKnelpuntberoep);

      return (
        matchesCategory &&
        matchesGratis &&
        matchesStartdatum &&
        matchesLesmoment &&
        matchesLeervorm &&
        matchesOrganisator &&
        matchesKnelpuntberoep &&
        matchesSubCategoryBeroep &&
        matchesSubCategoryGroei
      );
    });
  }

  toggleFiltersGratis() {
    this.showFiltersGratis = !this.showFiltersGratis;
  }
  toggleFiltersCategorie() {
    this.showFiltersCategorie = !this.showFiltersCategorie;
  }
  toggleFiltersLeervorm() {
    this.showFiltersLeervorm = !this.showFiltersLeervorm;
  }
  toggleFiltersLesmoment() {
    this.showFiltersLesmoment = !this.showFiltersLesmoment;
  }
  toggleFiltersKnelpuntberoep() {
    this.showFiltersKnelpuntberoep = !this.showFiltersKnelpuntberoep;
  }
  toggleFiltersStartdatum() {
    this.showFiltersStartdatum = !this.showFiltersStartdatum;
  }
  toggleFiltersOrganisator() {
    this.showFiltersOrganisator = !this.showFiltersOrganisator;
  }

  // checkbox toggle subset
  toggleExpand(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  toggleCheck(node: TreeNode): void {
    node.checked = !node.checked;

    // Update all children if present
    if (node.children) {
      this.setChildrenChecked(node.children, node.checked);
    }
  }

  setChildrenChecked(children: TreeNode[], checked: boolean): void {
    children.forEach(child => {
      child.checked = checked;
      if (child.children) {
        this.setChildrenChecked(child.children, checked);
      }
    });
  }
}
