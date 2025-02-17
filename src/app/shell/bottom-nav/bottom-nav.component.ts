import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject, combineLatest, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
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
  favoriteOpleidingen$ = this.api.getOpleidingen().pipe(
    map(items => items.filter(item => item.saved))
  );
  combined$ = new BehaviorSubject<any[]>([]);
  constructor(private api: ApiService){
    const combo = combineLatest([this.favorites$, this.favoriteOpleidingen$]).pipe(
      mergeMap(([arr1, arr2]) => of([...arr1, ...arr2]))
    );
    combo.subscribe(arr => this.combined$.next(arr));
  }
}
