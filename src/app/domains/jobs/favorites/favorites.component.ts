import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { map } from 'rxjs';
import { bottomNavItem } from '../job-list/job-list.component';
import { BottomNavComponent } from '../../../shell/bottom-nav/bottom-nav.component';
import { OpleidingTeaserComponent } from '../../opleidingen/opleiding-teaser/opleiding-teaser.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [BottomNavComponent, JobTeaserComponent, RouterLink, NgForOf, NgIf, AsyncPipe, OpleidingTeaserComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  navConfig: bottomNavItem[] = [
        {
          id: 1,
          icon: 'work',
          label: 'Jobs',
          routerlink: '/jobs/vind-een-job',
          hasBadge: false
        },
        {
          id: 2,
          icon: 'workspace_premium',
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
  favoriteOpleidingen$ = this.api.getOpleidingen().pipe(
    map(items => items.filter(item => item.saved))
  );
  constructor(private api: ApiService){
  }
}
