import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { map } from 'rxjs';
import { bottomNavItem } from '../job-list/job-list.component';
import { BottomNavComponent } from '../../shell/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [BottomNavComponent, JobTeaserComponent, RouterLink, NgForOf, NgIf, AsyncPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  navConfig: bottomNavItem[] = [
        {
          id: 1,
          icon: 'search',
          label: 'Jobs',
          routerlink: '/jobs/vind-een-job',
          hasBadge: false
        },
        {
          id: 2,
          icon: 'search',
          label: 'Opleidingen',
          routerlink: '/opleidingen/vind-een-opleiding',
          hasBadge: false
        },
        {
          id: 3,
          icon: 'star',
          label: 'Bewaard',
          routerlink: '/favorites',
          hasBadge: true
        },
    ];
  favorites$ = this.api.getJobs().pipe(
    map(items => items.filter(item => item.saved))
  );
  constructor(private api: ApiService){
  }
}
