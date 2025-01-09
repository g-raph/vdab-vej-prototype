import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ctaBlockItem {
  id: number,
  title: string;
  text: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-cta-block',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-block.component.html',
  styleUrl: './cta-block.component.scss'
})
export class CtaBlockComponent {
  @Input() item: ctaBlockItem = {
    id: 0,
    title: 'Titel',
    text: 'Tekst komt hier',
    link: '/',
    label: 'CTA',
  };
}
