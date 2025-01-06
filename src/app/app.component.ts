import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shell/header/header.component';
import { CommonModule } from '@angular/common';
import { FilterModalService } from './filter-modal.service';
import { ScrollTopComponent } from './shell/scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vej-prototype';
  filterOpen = this.filterService.filterOpen$;

  constructor(private filterService: FilterModalService){}

  openMobileSidebar() {
    this.filterOpen.next(true);
  }

  closeMobileSidebar() {
    this.filterOpen.next(false);
  }
}
