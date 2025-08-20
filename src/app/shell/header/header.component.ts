import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

export interface TypographyToken {
  name: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BreadcrumbComponent, NgIf, NgFor, ReactiveFormsModule],
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
  formTokens!: FormGroup;
  fontForm: FormGroup;
  searchTerm = '';
  isHome: boolean = false;
  defaultTokens: TypographyToken[] = [
    {
      name: "headings-h1",
      fontSize: "45px",
      lineHeight: "49.5px",
      fontWeight: "500",
      letterSpacing: "-0.02em"
    },
    {
      name: "headings-h1-mobile",
      fontSize: "34px",
      lineHeight: "42.5px",
      fontWeight: "500",
      letterSpacing: "-0.02em"
    },
    {
      name: "headings-h2",
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h2-mobile",
      fontSize: "28px",
      lineHeight: "30.8px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h3",
      fontSize: "26px",
      lineHeight: "28.6px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h3-mobile",
      fontSize: "26px",
      lineHeight: "32.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h4",
      fontSize: "22px",
      lineHeight: "27.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h4-mobile",
      fontSize: "22px",
      lineHeight: "27.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h5",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h5-mobile",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-medium-regular",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-medium-bold",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-small-regular",
      fontSize: "14px",
      lineHeight: "27px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-small-bold",
      fontSize: "14px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-large-regular",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-large-bold",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-introduction-block",
      fontSize: "26px",
      lineHeight: "28.6px",
      fontWeight: "300",
      letterSpacing: "normal"
    }
  ];
  tokens: TypographyToken[] = [
    {
      name: "headings-h1",
      fontSize: "45px",
      lineHeight: "49.5px",
      fontWeight: "500",
      letterSpacing: "-0.02em"
    },
    {
      name: "headings-h1-mobile",
      fontSize: "34px",
      lineHeight: "42.5px",
      fontWeight: "500",
      letterSpacing: "-0.02em"
    },
    {
      name: "headings-h2",
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h2-mobile",
      fontSize: "28px",
      lineHeight: "30.8px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h3",
      fontSize: "26px",
      lineHeight: "28.6px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h3-mobile",
      fontSize: "26px",
      lineHeight: "32.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h4",
      fontSize: "22px",
      lineHeight: "27.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h4-mobile",
      fontSize: "22px",
      lineHeight: "27.5px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h5",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "headings-h5-mobile",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-medium-regular",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-medium-bold",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-small-regular",
      fontSize: "14px",
      lineHeight: "27px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-small-bold",
      fontSize: "14px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-large-regular",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "400",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-large-bold",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: "500",
      letterSpacing: "normal"
    },
    {
      name: "paragraph-introduction-block",
      fontSize: "26px",
      lineHeight: "28.6px",
      fontWeight: "300",
      letterSpacing: "normal"
    }
  ];
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
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

    const saved = localStorage.getItem('typographyTokens');
    if (saved) {
      this.tokens = JSON.parse(saved);
    }

    this.formTokens = fb.group({
      tokens: fb.array(this.tokens.map(t => fb.group({
        name: [t.name],
        fontSize: [t.fontSize],
        lineHeight: [t.lineHeight],
        fontWeight: [t.fontWeight],
        letterSpacing: [t.letterSpacing]
      })))
    });

    // Initial load van CSS variabelen
    this.applyTokens(this.tokens);

    // Subscribe: update CSS variabelen bij wijziging
    this.formTokens.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.applyTokens(value.tokens);
      localStorage.setItem('typographyTokens', JSON.stringify(value.tokens));
    });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isHome = event.url === '/';
      });
  }

  get tokensForm(): FormArray {
    return this.formTokens.get('tokens') as FormArray;
  }

  applyTokens(tokens: TypographyToken[]): void {
    const root = document.documentElement;
    tokens.forEach(token => {
      root.style.setProperty(`--${token.name}-font-size`, token.fontSize);
      root.style.setProperty(`--${token.name}-line-height`, token.lineHeight);
      root.style.setProperty(`--${token.name}-font-weight`, token.fontWeight);
      root.style.setProperty(`--${token.name}-letter-spacing`, token.letterSpacing);
    });
  }

  resetTokens(): void {
    this.tokens = [...this.defaultTokens];
    this.applyTokens(this.defaultTokens);
    this.formTokens = this.fb.group({
      tokens: this.fb.array(this.tokens.map(t => this.fb.group({
        name: [t.name],
        fontSize: [t.fontSize],
        lineHeight: [t.lineHeight],
        fontWeight: [t.fontWeight],
        letterSpacing: [t.letterSpacing]
      })))
    });
    localStorage.setItem('typographyTokens', JSON.stringify(this.defaultTokens));
  }

  export() {
    const values = this.formTokens.value;
    const jsonTokens = {};
    Object.keys(values).forEach(key => {
      (jsonTokens as any)[key] = { value: values[key] };
    });
    const blob = new Blob([JSON.stringify(jsonTokens, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tokens.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  logout() {
    this.authService.logout();
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
  openSubMenu(dataValue: string) {
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
