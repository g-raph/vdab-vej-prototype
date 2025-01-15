import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBlockComponent, ctaBlockItem } from '../../../components/cta-block/cta-block.component';

@Component({
  selector: 'app-opleiding-search',
  standalone: true,
  imports: [RouterLink, CtaBlockComponent, NgFor],
  templateUrl: './opleiding-search.component.html',
  styleUrl: './opleiding-search.component.scss'
})
export class OpleidingSearchComponent {
  ctaBlockItems: ctaBlockItem[] = [
    {
      id: 0,
      title: 'Gratis en voordelig leren',
      text: 'We bieden meer dan 1000 opleidingen aan: online of in opleidingscentra in Vlaanderen en Brussel. Van workshops en online cursussen tot beroepsopleidingen. Sommige opleidingen zijn gratis, andere betalend. Dat hangt af van je situatie.',
      link: '/opleidingen/vind-een-opleiding',
      label: 'Ik heb wel/geen werk',
    },
    {
      id: 1,
      title: 'Ben je nog mee in je job? Doe de test!',
      text: 'De arbeidsmarkt is voortdurend in beweging. Daarom is het belangrijk dat je mee bent in je job. Ga via onze test na of je vaardigheden nog up-to-date zijn. Daarna krijg je opleidingssuggesties om te groeien en relevant te blijven.',
      link: '/opleidingen/vind-een-opleiding',
      label: 'Doe de test',
    }
  ];
}
