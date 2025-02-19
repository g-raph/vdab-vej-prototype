import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { OpleidingLocatie } from '../opleidingen';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-opleiding-teaser',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './opleiding-teaser.component.html',
  styleUrl: './opleiding-teaser.component.scss'
})
export class OpleidingTeaserComponent {
  @ViewChild('leervormModalTemplate') leervormModalTemplate!: TemplateRef<any>;
  @Input() opleiding: any;

  constructor(private api: ApiService, private modalService: ModalService) {}

  getLocationsString(locations: OpleidingLocatie[]) {
    const str = locations.map(location => location.stad).join(', ');
    return str;
  }
  
  setAsFavoriteOpleiding(opleiding: any) {
    this.api.addFavoriteOpleiding(opleiding);
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.openModal(template);
  }
}
