import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-job-teaser',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './job-teaser.component.html',
  styleUrl: './job-teaser.component.scss'
})
export class JobTeaserComponent {
  @Input() job: any;

  constructor(private api: ApiService){}

  setAsFavorite(job: any) {
    this.api.addFavorite(job);
  }
}
