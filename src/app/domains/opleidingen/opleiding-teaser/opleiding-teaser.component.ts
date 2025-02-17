import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { OpleidingLocatie } from '../opleidingen';

@Component({
  selector: 'app-opleiding-teaser',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './opleiding-teaser.component.html',
  styleUrl: './opleiding-teaser.component.scss'
})
export class OpleidingTeaserComponent {
  @Input() opleiding: any;

  constructor(private api: ApiService) {}

  getLocationsString(locations: OpleidingLocatie[]) {
    const str = locations.map(location => location.stad).join(', ');
    return str;
  }
  
  setAsFavoriteOpleiding(opleiding: any) {
    this.api.addFavoriteOpleiding(opleiding);
  }
}
