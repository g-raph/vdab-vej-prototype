import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-opleiding-teaser',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './opleiding-teaser.component.html',
  styleUrl: './opleiding-teaser.component.scss'
})
export class OpleidingTeaserComponent {
  @Input() opleiding: any;

  constructor(private api: ApiService) { }

  setAsFavorite(opleiding: any) {
    this.api.addFavorite(opleiding);
  }
}
