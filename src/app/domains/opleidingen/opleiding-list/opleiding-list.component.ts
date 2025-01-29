import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BottomNavComponent } from '../../../shell/bottom-nav/bottom-nav.component';
import { bottomNavItem } from '../../jobs/job-list/job-list.component';
import { OpleidingTeaserComponent } from '../opleiding-teaser/opleiding-teaser.component';

export interface TreeNode {
  name: string;
  checked: boolean;
  hasChildrenChecked?: boolean;
  expanded: boolean;
  children?: TreeNode[];
}

export interface Result {
  name: string;
  filterCategorie: string;
  filterSubCategorie: string;
  filterGratis: string;
  filterStartdatum: string;
  filterLesmoment: string;
  filterWaarLeerJe: string;
  filterLeervorm: string;
  filterOrganisator: string;
  filterKnelpuntberoep: string;
}

@Component({
  selector: 'app-opleiding-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, OpleidingTeaserComponent, NgIf, BottomNavComponent],
  templateUrl: './opleiding-list.component.html',
  styleUrl: './opleiding-list.component.scss',
})
export class OpleidingListComponent {
  navConfig: bottomNavItem[] = [
    {
      id: 1,
      icon: 'search',
      label: 'Opleidingen',
      routerlink: '/opleidingen/vind-een-opleiding',
      hasBadge: false
    },
    {
      id: 2,
      icon: 'star',
      label: 'Bewaard',
      routerlink: '/favorites',
      hasBadge: true
    },
  ];
  filterboxOpen = true;
  filterCategorie: TreeNode[] = [
    {
      name: 'Beroepsopleidingen',
      checked: false,
      hasChildrenChecked: false,
      expanded: false,
      children: [
        { name: 'Administratie', checked: false, expanded: false },
        { name: 'Bouw', checked: false, expanded: false },
        { name: 'Communicatie', checked: false, expanded: false },
        { name: 'Creatief', checked: false, expanded: false },
        { name: 'Dienstverlening', checked: false, expanded: false },
        { name: 'Financieel', checked: false, expanded: false },
        { name: 'Gezondheid', checked: false, expanded: false },
        { name: 'Horeca en toerisme', checked: false, expanded: false },
        { name: 'Human resources', checked: false, expanded: false },
        { name: 'ICT', checked: false, expanded: false },
        { name: 'Juridisch', checked: false, expanded: false },
        { name: 'Land- en tuinbouw', checked: false, expanded: false },
        { name: 'Logistiek en transport', checked: false, expanded: false },
        { name: 'Management', checked: false, expanded: false },
        { name: 'Marketing', checked: false, expanded: false },
        { name: 'Onderhoud', checked: false, expanded: false },
        { name: 'Onderwijs', checked: false, expanded: false },
        { name: 'Onderzoek en ontwikkeling', checked: false, expanded: false },
        { name: 'Productie', checked: false, expanded: false },
        { name: 'Techniek', checked: false, expanded: false },
        { name: 'Verkoop', checked: false, expanded: false },
      ]
    },
    {
      name: 'Persoonlijke en professionele groei',
      checked: false,
      hasChildrenChecked: false,
      expanded: false,
      children: [
        { name: 'Talen', checked: false, expanded: false },
        { name: 'Communicatie ', checked: false, expanded: false },
        { name: 'Digitale vaardigheden', checked: false, expanded: false },
        { name: 'Persoonlijke vaardigheden', checked: false, expanded: false },
        { name: 'Professionele vaardigheden', checked: false, expanded: false },
      ]
    },
    {
      name: 'Nederlands voor anderstaligen',
      checked: false,
      expanded: false,
    }
  ];
  filterGratis = [
    'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
    'Gratis opleidingen voor wie werkt',
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
  filterWaarLeerJe = [
    'Online',
    'Op locatie',
    'Op locatie en online',
  ];
  filterLeervorm = [
    'Groepsleren',
    'E-cursus',
    'Workshops',
    '1 op 1 (individueel)',
    'Duaal leren',
  ];
  filterOrganisator = ['VDAB', 'Andere'];
  filterKnelpuntberoep = ['Ja'];
  filterForm: FormGroup;
  items: Result[] = [
    {
      name: 'Kapper/Kapster',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Creatief',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Verzorgende',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Gezondheid',
      filterGratis: 'Betalend',
      filterStartdatum: 'April 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Nederlands - Nederlandse spelling',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Talen',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Assertiviteit in de werksituatie',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Persoonlijke vaardigheden',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'E-cursus',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Bekister',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Bouw',
      filterGratis: 'Betalend',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Powerpoint voor managers',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Professionele vaardigheden',
      filterGratis: 'Gratis opleidingen voor wie werkt',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Workshops',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Leren werken met een computer',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Betalend',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Leerkracht wiskunde',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Onderwijs',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Succesvol presenteren',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Gratis opleidingen voor wie werkt',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Workshops',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Poetsvrouw / Poetsman',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Onderhoud',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'E-cursus',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    
    {
      name: 'Vertaler Russisch - Nederlands',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Communicatie',
      filterGratis: 'Betalend',
      filterStartdatum: 'Januari 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Bankbediende KBC',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Financieel',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Boer verzorging kalveren',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Land- en tuinbouw',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Februari 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Klusjesman Center Parks',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Techniek',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Marketing assistent - social media',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Marketing',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Juni 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Management opleiding',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Professionele vaardigheden',
      filterGratis: 'Betalend',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Workshops',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Onderzoeken beheren',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Onderzoek en ontwikkeling',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2024',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Rijbewijs CE',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Logistiek en transport',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Maart 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'E-cursus',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      name: 'Administratieve taken beheer',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Administratie',
      filterGratis: 'Gratis opleidingen voor wie werkt',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Verkopen van stofzuigers',
      filterCategorie: 'Beroepsopleidingen',
      filterSubCategorie: 'Verkoop',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'November 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Nederlands - spelling',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Betalend',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Nederlands - algemeen',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Gratis opleidingen voor wie werkt',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      name: 'Nederlands - werkwoorden',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'November 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
  ];

  selectedFilters: string[] = [];
  childIsChecked = false;

  showFiltersCategorie = true;
  showFiltersGratis = true;
  showFiltersStartdatum = false;
  showFiltersLesmoment = false;
  showFiltersWaarLeerJe = false;
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
      filterWaarLeerJe: this.fb.group(
        this.filterWaarLeerJe.reduce((acc: any, category: any) => {
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
  }

  toggleOpenFilters() {
    this.filterboxOpen = !this.filterboxOpen;
    document.body.style.overflow = this.filterboxOpen ? 'hidden' : 'visible';
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
    const selectedWaarLeerJe = Object.keys(
      this.filterForm.value.filterWaarLeerJe
    ).filter((category) => this.filterForm.value.filterWaarLeerJe[category]);
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
      const matchesWaarLeerJe =
        selectedWaarLeerJe.length === 0 ||
        selectedWaarLeerJe.includes(item.filterWaarLeerJe);
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
        matchesWaarLeerJe &&
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
  toggleFiltersWaarLeerJe() {
    this.showFiltersWaarLeerJe = !this.showFiltersWaarLeerJe;
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

  toggleExpand(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  toggleCheck(node: TreeNode): void {
    node.checked = !node.checked;
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

  checkIfChildrenAreChecked(cat: TreeNode) {
    const matches = cat.children?.filter(obj => this.selectedFilters.includes(obj.name));
    cat.hasChildrenChecked = matches?.length ? true : false;
  }

  uncheckAllFilters() {
    window.location.reload();
    this.selectedFilters = [];
  }
  
  addToSelectedFilters(category: string) {
    const index = this.selectedFilters.indexOf(category);
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    } else {
      this.selectedFilters.push(category);
    }
  }

  filterObjectsByStrings(objects: Result[], strings: string[]) {
    return objects.filter(obj =>
      strings.every(str => Object.values(obj).includes(str))
    );
  }

  countResults(filterKey: keyof Result, category: string) {
    const results = this.filterObjectsByStrings(this.items, this.selectedFilters);
    return results.filter(item => item[filterKey] === category).length;
  }
}
