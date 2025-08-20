import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar-animation',
  standalone: true,
  imports: [],
  templateUrl: './tabbar-animation.component.html',
  styleUrl: './tabbar-animation.component.scss'
})
export class TabbarAnimationComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const nav: HTMLElement | null = document.querySelector(".tabbar ul");
    const items = document.querySelectorAll(".tabbar-item");
    const indicator = nav;

    const setIndicator: any = (el: any) => {
      const rect = el.getBoundingClientRect();
      const navRect = nav!.getBoundingClientRect();
      nav!.style.setProperty("--indicator-left", rect.left - navRect.left + "px");
      nav!.style.setProperty("--indicator-width", rect.width + "px");
    }
    
    items.forEach(item => {
      item.addEventListener("click", () => {
        document.querySelector(".tabbar-item.active")?.classList.remove("active");
        item.classList.add("active");
        setIndicator(item);
      });
    });
    // Startpositie instellen
    setIndicator(document.querySelector(".tabbar-item.active"));
  }
    

}
