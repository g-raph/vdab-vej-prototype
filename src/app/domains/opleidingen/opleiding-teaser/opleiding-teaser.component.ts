import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-opleiding-teaser',
  standalone: true,
  imports: [NgIf, NgClass],
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
