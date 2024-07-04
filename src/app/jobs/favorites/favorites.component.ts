import { Component } from '@angular/core';
import { FooterComponent } from '../../shell/footer/footer.component';
import { ApiService } from '../../api.service';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FavoriteService } from '../../favorite.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FooterComponent, JobTeaserComponent, RouterLink, NgForOf, NgIf, AsyncPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favorites$ = this.api.getJobs().pipe(
    map(items => items.filter(item => item.saved))
  );
  constructor(private api: ApiService){
  }
}
