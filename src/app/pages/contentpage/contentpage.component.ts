import { Component } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  standalone: true,
  imports: [],
  templateUrl: './contentpage.component.html',
  styleUrl: './contentpage.component.scss'
})
export class ContentpageComponent {
  showResetCss = false;
  toggleResetCss() {
    this.showResetCss = !this.showResetCss;
  }
}
