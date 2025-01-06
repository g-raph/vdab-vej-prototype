import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent {
  isVisible = false;

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Check if the scroll position is more than 500px
    this.isVisible = window.pageYOffset > 800;
  }

  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
