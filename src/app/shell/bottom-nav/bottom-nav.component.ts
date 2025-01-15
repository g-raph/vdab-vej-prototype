import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from '../../api.service';
import { bottomNavItem } from '../../domains/jobs/job-list/job-list.component';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, NgForOf, RouterLinkActive, NgIf, NgFor, AsyncPipe],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  @Input() bottomNavConfig: bottomNavItem[] = [];

  favorites$ = this.api.getJobs().pipe(
    map(items => items.filter(item => item.saved))
  );
  constructor(private api: ApiService){
  }
}
