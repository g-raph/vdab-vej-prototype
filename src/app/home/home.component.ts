import { Component } from '@angular/core';
import { CtaBlockComponent, ctaBlockItem } from "../components/cta-block/cta-block.component";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CtaBlockComponent, CtaBlockComponent, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ctaBlockItems1: ctaBlockItem[] = [
    {
      id: 0,
      title: 'Jobs',
      text: 'Zoek snel en gemakkelijk een job en scoor met je sollicitatie.',
      link: '/jobs',
      label: 'Alles om een job te vinden',
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
      link: '/orienteren',
      label: 'Alles om je te oriënteren',
    }
  ];
  ctaBlockItems2: ctaBlockItem[] = [
    {
      id: 0,
      title: 'Schrijf je in als werkzoekende',
      text: 'Om je beroepsinschakelingstijd te starten als je pas van school komt of pas afgestudeerd bent.\nOm een werkloosheids-, inschakelings- of inkomensgarantie-uitkering aan te vragen.\nIn specifieke gevallen.',
      link: '/login',
      label: 'Schrijf je in',
    },
    {
      id: 1,
      title: 'Ben je werkgever?',
      text: 'We helpen je om kandidaten te vinden en op te leiden.',
      link: '/opleidingen/vind-een-opleiding',
      label: 'Naar site werkgevers',
    }
  ];
}
