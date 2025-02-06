import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BottomNavComponent } from '../../../shell/bottom-nav/bottom-nav.component';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { bottomNavItem } from '../../jobs/job-list/job-list.component';
import { OpleidingLocatie, Result } from '../opleidingen';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-opleiding-detail',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, BottomNavComponent, NgFor, CurrencyPipe],
  templateUrl: './opleiding-detail.component.html',
  styleUrl: './opleiding-detail.component.scss'
})
export class OpleidingDetailComponent {

  opleidingId: any;
  opleiding$: Observable<Result | undefined>;

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

  @ViewChild('topinfo', { static: false }) private topinfo: ElementRef<HTMLDivElement> = {} as ElementRef;
  scrollPosLow = true;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.topinfo) {
      const rect = this.topinfo.nativeElement.getBoundingClientRect();
      const bottomShown = rect.bottom <= 0;
      this.scrollPosLow = !bottomShown;
    }
  }

  constructor(private api: ApiService, private router: ActivatedRoute, private el: ElementRef, private sanitizer: DomSanitizer) {
    this.opleidingId = this.router.snapshot.params['id'];
    this.opleiding$ = this.api.getOpleiding(parseInt(this.opleidingId));
  }
  setAsFavorite(opleiding: any) {
    this.api.addFavoriteOpleiding(opleiding);
  }
  scrollToPosition(container: string) {
    this.el.nativeElement.querySelector(container).scrollIntoView({ behavior: "smooth" });
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getLocationsString(locations: OpleidingLocatie[]) {
    const str = locations.map(location => location.stad).join(', ');
    return str;
  }
}
