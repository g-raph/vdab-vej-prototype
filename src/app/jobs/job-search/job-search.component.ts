import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaBlockComponent, ctaBlockItem } from '../../components/cta-block/cta-block.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [RouterLink, CtaBlockComponent, NgFor],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent {
  ctaBlockItems: ctaBlockItem[] = [
      {
        id: 0,
        title: 'Tips, voorbeelden en templates',
        text: 'Ontdek sollicitatietips en handige checklists. Laat je inspireren door voorbeeldbrieven. Ga aan de slag met aantrekkelijke templates.',
        link: '/jobs/vind-een-job',
        label: 'Bekijk onze sollicitatie-info',
      },
      {
        id: 1,
        title: 'Hulp van onze sollicitatiecoaches',
        text: 'Laat je sollicitatiebrief en cv nakijken. Oefen samen je sollicitatiegesprek. Stel al je vragen over het sollicitatieproces.',
        link: '/jobs/vind-een-job',
        label: 'Schakel onze online sollicitatiecoaches in',
      }
    ];
}
