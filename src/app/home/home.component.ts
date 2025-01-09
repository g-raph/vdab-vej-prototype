import { Component } from '@angular/core';
import { CtaBlockComponent, ctaBlockItem } from "../components/cta-block/cta-block.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CtaBlockComponent, CtaBlockComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ctaBlockItems: ctaBlockItem[] = [
    {
      id: 0,
      title: 'Jobs',
      text: 'Zoek snel en gemakkelijk een job en scoor met je sollicitatie.',
      link: '/jobs',
      label: 'Alles om een job te leren',
    },
    {
      id: 1,
      title: 'Opleidingen',
      text: 'Onze opleidingen zijn er voor iedereen! Of je nu werk zoekt of werk hebt. Ga meteen aan de slag.',
      link: '/opleidingen',
      label: 'Alles om je bij te scholen',
    },
    {
      id: 2,
      title: 'Oriënteren',
      text: 'Ontdek welke job bij je past en wat je mogelijkheden zijn op de arbeidsmarkt.',
      link: '/',
      label: 'Alles om je te oriënteren',
    }
  ];
}
