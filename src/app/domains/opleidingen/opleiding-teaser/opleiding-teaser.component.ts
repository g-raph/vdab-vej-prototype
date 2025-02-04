import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ApiService } from '../../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-opleiding-teaser',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink],
  templateUrl: './opleiding-teaser.component.html',
  styleUrl: './opleiding-teaser.component.scss'
})
export class OpleidingTeaserComponent {
  @Input() opleiding: any;

  constructor(private api: ApiService) { 

    console.log(this.opleiding);
  }

  setAsFavoriteOpleiding(opleiding: any) {
    this.api.addFavoriteOpleiding(opleiding);
  }
}
