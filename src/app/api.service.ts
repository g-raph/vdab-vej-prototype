import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  favorites$ = new BehaviorSubject<any[]>([]);
  jobs$ = new BehaviorSubject<any[]>([
    {
      title: 'Senior system engineer manager',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><h4>Locatie: Melsele</h4><p>Dit boekhoudkantoor is gevestigd in het bruisende Melsele en is opgericht door twee gedreven vennoten die hun sporen hebben verdiend in de fiduciaire sector. Met meer dan 300 dossiers, waaronder gerenommeerde horecazaken, en een divers klantenportfolio, is hun kantoor uitgegroeid tot een toonaangevend bedrijf. In hun spiksplinternieuwe kantoor, dat ze betrekken sinds een jaar, staat digitalisering centraal, en ze hebben zelfs een award gewonnen voor snelle verwerking met Yuki.</p><h4>Functieomschrijving:</h4><p>Als Boekhouder ben je verantwoordelijk voor diverse taken binnen de fiduciaire sector. Met minimaal 2 jaar ervaring ben je bekend met inboekwerk, btw-aangiften, jaarrekeningen, VennB en Pb.</p><p>Indien je in het bezit bent van een ITAA-titel, kun je ook afsluitingen verzorgen. Ze werken met geavanceerde systemen zoals Yuki en Silverfin.</p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Wie zoeken ze:</p><ul><li>Diploma in accountancy</li><li>Minimaal 2 jaar ervaring als boekhouder</li><li>Vloeiend in het Nederlands</li></ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <!----> <span> <ul class="competenties"> <li style="white-space: pre-line;">Domein: Klantenboekhouding</li><li style="white-space: pre-line;">De eigen deskundigheid ontwikkelen</li><li style="white-space: pre-line;">Domein: Algemene boekhouding</li><li style="white-space: pre-line;">De wettelijke fiscale en sociale aangiften opstellen en uitvoeren</li><li style="white-space: pre-line;">Domein: Fiscaliteit</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Wat bieden ze:</p><ul><li>Een dynamisch team in een landschapsbureau, waar de vennoten makkelijk aanspreekbaar zijn</li><li>Familiale sfeer en goede begeleiding voor een vlotte integratie</li><li>Onbeperkte doorgroeimogelijkheden, zelfs een zitje als vennoot op termijn</li><li>Focus op digitalisering, met erkenning door een gewonnen award met Yuki</li><li>Leuke extras op kantoor zoals fruit, soep, drank, en regelmatig pizza voor het hele kantoor</li><li>Opleidingsmogelijkheden en ITAA-stage</li><li>Happiness Manager die zorgt voor diverse activiteiten en verwenpakketjes voor medewerkers</li><li>Mogelijkheid tot workcations</li></ul><p>Arbeidsvoorwaarden:</p><ul><li>38-urige werkweek, starten tot 9u30</li><li>Overuren vermijden, indien nodig kunnen ze gerecupereerd worden</li><li>Tot 3 dagen per week thuiswerken, afhankelijk van senioriteit</li><li>Aantrekkelijk salarispakket met cafetariaplan</li><li>Bedrijfswagen met tankkaart</li><li>Groepsverzekering en hospitalisatieverzekering</li><li>Maaltijdcheques €8</li><li>Onkostenvergoeding, gsm</li><li>Collectief verlof tussen kerst en nieuwjaar</li><li>Per 5 jaar anciënniteit 1 extra verlofdag</li></ul><p> </p><p>Heb je interesse in deze vacature of ken je iemand die hierin geïnteresseerd kan zijn? Aarzel dan zeker niet om Alyssa van Austin Bright samen met je cv te contacteren via apply @ austinbright.com of bel ons op het nummer 02 808 33 55. We zorgen steeds voor een confidentiële behandeling van je kandidatuur.</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Master TEW: Accountancy </li><li> Prof. bach. Bedrijfsmanagement: Accountancy-fiscaliteit </li><li> Master Handelswetenschappen: Accountancy en fiscaliteit </li><li> Master Handelswetenschappen: Accountancy </li><li> Graduaat Boekhouden - Informatica </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4>Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Colruyt Group Technics',
        logo: '/assets/logo1.png',
        location: 'Gent, Oost-Vlaanderen'
      },
      tags: [
        'Vaste job',
        'Remote',
        '3-5 jaar'
      ],
      new: true,
      saved: false,
      id: 1
    },
    {
      title: 'Procurement manager',
      location: {
        office: 'ASAP Office Stabroek',
        city: 'Stabroek',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><h4>Locatie: Melsele</h4><p>Dit boekhoudkantoor is gevestigd in het bruisende Melsele en is opgericht door twee gedreven vennoten die hun sporen hebben verdiend in de fiduciaire sector. Met meer dan 300 dossiers, waaronder gerenommeerde horecazaken, en een divers klantenportfolio, is hun kantoor uitgegroeid tot een toonaangevend bedrijf. In hun spiksplinternieuwe kantoor, dat ze betrekken sinds een jaar, staat digitalisering centraal, en ze hebben zelfs een award gewonnen voor snelle verwerking met Yuki.</p><h4>Functieomschrijving:</h4><p>Als Boekhouder ben je verantwoordelijk voor diverse taken binnen de fiduciaire sector. Met minimaal 2 jaar ervaring ben je bekend met inboekwerk, btw-aangiften, jaarrekeningen, VennB en Pb.</p><p>Indien je in het bezit bent van een ITAA-titel, kun je ook afsluitingen verzorgen. Ze werken met geavanceerde systemen zoals Yuki en Silverfin.</p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Wie zoeken ze:</p><ul><li>Diploma in accountancy</li><li>Minimaal 2 jaar ervaring als boekhouder</li><li>Vloeiend in het Nederlands</li></ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <!----> <span> <ul class="competenties"> <li style="white-space: pre-line;">Domein: Klantenboekhouding</li><li style="white-space: pre-line;">De eigen deskundigheid ontwikkelen</li><li style="white-space: pre-line;">Domein: Algemene boekhouding</li><li style="white-space: pre-line;">De wettelijke fiscale en sociale aangiften opstellen en uitvoeren</li><li style="white-space: pre-line;">Domein: Fiscaliteit</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Wat bieden ze:</p><ul><li>Een dynamisch team in een landschapsbureau, waar de vennoten makkelijk aanspreekbaar zijn</li><li>Familiale sfeer en goede begeleiding voor een vlotte integratie</li><li>Onbeperkte doorgroeimogelijkheden, zelfs een zitje als vennoot op termijn</li><li>Focus op digitalisering, met erkenning door een gewonnen award met Yuki</li><li>Leuke extras op kantoor zoals fruit, soep, drank, en regelmatig pizza voor het hele kantoor</li><li>Opleidingsmogelijkheden en ITAA-stage</li><li>Happiness Manager die zorgt voor diverse activiteiten en verwenpakketjes voor medewerkers</li><li>Mogelijkheid tot workcations</li></ul><p>Arbeidsvoorwaarden:</p><ul><li>38-urige werkweek, starten tot 9u30</li><li>Overuren vermijden, indien nodig kunnen ze gerecupereerd worden</li><li>Tot 3 dagen per week thuiswerken, afhankelijk van senioriteit</li><li>Aantrekkelijk salarispakket met cafetariaplan</li><li>Bedrijfswagen met tankkaart</li><li>Groepsverzekering en hospitalisatieverzekering</li><li>Maaltijdcheques €8</li><li>Onkostenvergoeding, gsm</li><li>Collectief verlof tussen kerst en nieuwjaar</li><li>Per 5 jaar anciënniteit 1 extra verlofdag</li></ul><p> </p><p>Heb je interesse in deze vacature of ken je iemand die hierin geïnteresseerd kan zijn? Aarzel dan zeker niet om Alyssa van Austin Bright samen met je cv te contacteren via apply @ austinbright.com of bel ons op het nummer 02 808 33 55. We zorgen steeds voor een confidentiële behandeling van je kandidatuur.</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Master TEW: Accountancy </li><li> Prof. bach. Bedrijfsmanagement: Accountancy-fiscaliteit </li><li> Master Handelswetenschappen: Accountancy en fiscaliteit </li><li> Master Handelswetenschappen: Accountancy </li><li> Graduaat Boekhouden - Informatica </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4>Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Aertssen Kranen',
        logo: '/assets/logo2.png',
        location: 'Stabroek, Oost-Vlaanderen'
      },
      tags: [
        'Vaste job',
        'Remote',
        '3-5 jaar'
      ],
      new: true,
      saved: false,
      id: 2
    },
    {
      title: 'Frontend developer manager',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><h4>Locatie: Melsele</h4><p>Dit boekhoudkantoor is gevestigd in het bruisende Melsele en is opgericht door twee gedreven vennoten die hun sporen hebben verdiend in de fiduciaire sector. Met meer dan 300 dossiers, waaronder gerenommeerde horecazaken, en een divers klantenportfolio, is hun kantoor uitgegroeid tot een toonaangevend bedrijf. In hun spiksplinternieuwe kantoor, dat ze betrekken sinds een jaar, staat digitalisering centraal, en ze hebben zelfs een award gewonnen voor snelle verwerking met Yuki.</p><h4>Functieomschrijving:</h4><p>Als Boekhouder ben je verantwoordelijk voor diverse taken binnen de fiduciaire sector. Met minimaal 2 jaar ervaring ben je bekend met inboekwerk, btw-aangiften, jaarrekeningen, VennB en Pb.</p><p>Indien je in het bezit bent van een ITAA-titel, kun je ook afsluitingen verzorgen. Ze werken met geavanceerde systemen zoals Yuki en Silverfin.</p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Wie zoeken ze:</p><ul><li>Diploma in accountancy</li><li>Minimaal 2 jaar ervaring als boekhouder</li><li>Vloeiend in het Nederlands</li></ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <!----> <span> <ul class="competenties"> <li style="white-space: pre-line;">Domein: Klantenboekhouding</li><li style="white-space: pre-line;">De eigen deskundigheid ontwikkelen</li><li style="white-space: pre-line;">Domein: Algemene boekhouding</li><li style="white-space: pre-line;">De wettelijke fiscale en sociale aangiften opstellen en uitvoeren</li><li style="white-space: pre-line;">Domein: Fiscaliteit</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Wat bieden ze:</p><ul><li>Een dynamisch team in een landschapsbureau, waar de vennoten makkelijk aanspreekbaar zijn</li><li>Familiale sfeer en goede begeleiding voor een vlotte integratie</li><li>Onbeperkte doorgroeimogelijkheden, zelfs een zitje als vennoot op termijn</li><li>Focus op digitalisering, met erkenning door een gewonnen award met Yuki</li><li>Leuke extras op kantoor zoals fruit, soep, drank, en regelmatig pizza voor het hele kantoor</li><li>Opleidingsmogelijkheden en ITAA-stage</li><li>Happiness Manager die zorgt voor diverse activiteiten en verwenpakketjes voor medewerkers</li><li>Mogelijkheid tot workcations</li></ul><p>Arbeidsvoorwaarden:</p><ul><li>38-urige werkweek, starten tot 9u30</li><li>Overuren vermijden, indien nodig kunnen ze gerecupereerd worden</li><li>Tot 3 dagen per week thuiswerken, afhankelijk van senioriteit</li><li>Aantrekkelijk salarispakket met cafetariaplan</li><li>Bedrijfswagen met tankkaart</li><li>Groepsverzekering en hospitalisatieverzekering</li><li>Maaltijdcheques €8</li><li>Onkostenvergoeding, gsm</li><li>Collectief verlof tussen kerst en nieuwjaar</li><li>Per 5 jaar anciënniteit 1 extra verlofdag</li></ul><p> </p><p>Heb je interesse in deze vacature of ken je iemand die hierin geïnteresseerd kan zijn? Aarzel dan zeker niet om Alyssa van Austin Bright samen met je cv te contacteren via apply @ austinbright.com of bel ons op het nummer 02 808 33 55. We zorgen steeds voor een confidentiële behandeling van je kandidatuur.</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Master TEW: Accountancy </li><li> Prof. bach. Bedrijfsmanagement: Accountancy-fiscaliteit </li><li> Master Handelswetenschappen: Accountancy en fiscaliteit </li><li> Master Handelswetenschappen: Accountancy </li><li> Graduaat Boekhouden - Informatica </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4>Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Select Technology',
        logo: '/assets/logo3.jpg',
        location: 'Herne, Oost-Vlaanderen'
      },
      tags: [
        'Vaste job',
        'Remote',
        '3-5 jaar'
      ],
      new: false,
      saved: false,
      id: 3
    },
    {
      title: 'Backend developer manager',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><h4>Locatie: Melsele</h4><p>Dit boekhoudkantoor is gevestigd in het bruisende Melsele en is opgericht door twee gedreven vennoten die hun sporen hebben verdiend in de fiduciaire sector. Met meer dan 300 dossiers, waaronder gerenommeerde horecazaken, en een divers klantenportfolio, is hun kantoor uitgegroeid tot een toonaangevend bedrijf. In hun spiksplinternieuwe kantoor, dat ze betrekken sinds een jaar, staat digitalisering centraal, en ze hebben zelfs een award gewonnen voor snelle verwerking met Yuki.</p><h4>Functieomschrijving:</h4><p>Als Boekhouder ben je verantwoordelijk voor diverse taken binnen de fiduciaire sector. Met minimaal 2 jaar ervaring ben je bekend met inboekwerk, btw-aangiften, jaarrekeningen, VennB en Pb.</p><p>Indien je in het bezit bent van een ITAA-titel, kun je ook afsluitingen verzorgen. Ze werken met geavanceerde systemen zoals Yuki en Silverfin.</p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Wie zoeken ze:</p><ul><li>Diploma in accountancy</li><li>Minimaal 2 jaar ervaring als boekhouder</li><li>Vloeiend in het Nederlands</li></ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <!----> <span> <ul class="competenties"> <li style="white-space: pre-line;">Domein: Klantenboekhouding</li><li style="white-space: pre-line;">De eigen deskundigheid ontwikkelen</li><li style="white-space: pre-line;">Domein: Algemene boekhouding</li><li style="white-space: pre-line;">De wettelijke fiscale en sociale aangiften opstellen en uitvoeren</li><li style="white-space: pre-line;">Domein: Fiscaliteit</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Wat bieden ze:</p><ul><li>Een dynamisch team in een landschapsbureau, waar de vennoten makkelijk aanspreekbaar zijn</li><li>Familiale sfeer en goede begeleiding voor een vlotte integratie</li><li>Onbeperkte doorgroeimogelijkheden, zelfs een zitje als vennoot op termijn</li><li>Focus op digitalisering, met erkenning door een gewonnen award met Yuki</li><li>Leuke extras op kantoor zoals fruit, soep, drank, en regelmatig pizza voor het hele kantoor</li><li>Opleidingsmogelijkheden en ITAA-stage</li><li>Happiness Manager die zorgt voor diverse activiteiten en verwenpakketjes voor medewerkers</li><li>Mogelijkheid tot workcations</li></ul><p>Arbeidsvoorwaarden:</p><ul><li>38-urige werkweek, starten tot 9u30</li><li>Overuren vermijden, indien nodig kunnen ze gerecupereerd worden</li><li>Tot 3 dagen per week thuiswerken, afhankelijk van senioriteit</li><li>Aantrekkelijk salarispakket met cafetariaplan</li><li>Bedrijfswagen met tankkaart</li><li>Groepsverzekering en hospitalisatieverzekering</li><li>Maaltijdcheques €8</li><li>Onkostenvergoeding, gsm</li><li>Collectief verlof tussen kerst en nieuwjaar</li><li>Per 5 jaar anciënniteit 1 extra verlofdag</li></ul><p> </p><p>Heb je interesse in deze vacature of ken je iemand die hierin geïnteresseerd kan zijn? Aarzel dan zeker niet om Alyssa van Austin Bright samen met je cv te contacteren via apply @ austinbright.com of bel ons op het nummer 02 808 33 55. We zorgen steeds voor een confidentiële behandeling van je kandidatuur.</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Master TEW: Accountancy </li><li> Prof. bach. Bedrijfsmanagement: Accountancy-fiscaliteit </li><li> Master Handelswetenschappen: Accountancy en fiscaliteit </li><li> Master Handelswetenschappen: Accountancy </li><li> Graduaat Boekhouden - Informatica </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4>Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Square City',
        logo: '/assets/logo4.png',
        location: 'Herne, Oost-Vlaanderen'
      },
      tags: [
        'Vaste job',
        'Remote',
        '3-5 jaar'
      ],
      new: false,
      saved: false,
      id: 4
    },
    {
      title: 'Quality Teamleader Colruyt manager',
      location: {
        office: 'ASAP Office Brussel',
        city: 'Brussel',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><h4>Locatie: Melsele</h4><p>Dit boekhoudkantoor is gevestigd in het bruisende Melsele en is opgericht door twee gedreven vennoten die hun sporen hebben verdiend in de fiduciaire sector. Met meer dan 300 dossiers, waaronder gerenommeerde horecazaken, en een divers klantenportfolio, is hun kantoor uitgegroeid tot een toonaangevend bedrijf. In hun spiksplinternieuwe kantoor, dat ze betrekken sinds een jaar, staat digitalisering centraal, en ze hebben zelfs een award gewonnen voor snelle verwerking met Yuki.</p><h4>Functieomschrijving:</h4><p>Als Boekhouder ben je verantwoordelijk voor diverse taken binnen de fiduciaire sector. Met minimaal 2 jaar ervaring ben je bekend met inboekwerk, btw-aangiften, jaarrekeningen, VennB en Pb.</p><p>Indien je in het bezit bent van een ITAA-titel, kun je ook afsluitingen verzorgen. Ze werken met geavanceerde systemen zoals Yuki en Silverfin.</p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Wie zoeken ze:</p><ul><li>Diploma in accountancy</li><li>Minimaal 2 jaar ervaring als boekhouder</li><li>Vloeiend in het Nederlands</li></ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <!----> <span> <ul class="competenties"> <li style="white-space: pre-line;">Domein: Klantenboekhouding</li><li style="white-space: pre-line;">De eigen deskundigheid ontwikkelen</li><li style="white-space: pre-line;">Domein: Algemene boekhouding</li><li style="white-space: pre-line;">De wettelijke fiscale en sociale aangiften opstellen en uitvoeren</li><li style="white-space: pre-line;">Domein: Fiscaliteit</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Wat bieden ze:</p><ul><li>Een dynamisch team in een landschapsbureau, waar de vennoten makkelijk aanspreekbaar zijn</li><li>Familiale sfeer en goede begeleiding voor een vlotte integratie</li><li>Onbeperkte doorgroeimogelijkheden, zelfs een zitje als vennoot op termijn</li><li>Focus op digitalisering, met erkenning door een gewonnen award met Yuki</li><li>Leuke extras op kantoor zoals fruit, soep, drank, en regelmatig pizza voor het hele kantoor</li><li>Opleidingsmogelijkheden en ITAA-stage</li><li>Happiness Manager die zorgt voor diverse activiteiten en verwenpakketjes voor medewerkers</li><li>Mogelijkheid tot workcations</li></ul><p>Arbeidsvoorwaarden:</p><ul><li>38-urige werkweek, starten tot 9u30</li><li>Overuren vermijden, indien nodig kunnen ze gerecupereerd worden</li><li>Tot 3 dagen per week thuiswerken, afhankelijk van senioriteit</li><li>Aantrekkelijk salarispakket met cafetariaplan</li><li>Bedrijfswagen met tankkaart</li><li>Groepsverzekering en hospitalisatieverzekering</li><li>Maaltijdcheques €8</li><li>Onkostenvergoeding, gsm</li><li>Collectief verlof tussen kerst en nieuwjaar</li><li>Per 5 jaar anciënniteit 1 extra verlofdag</li></ul><p> </p><p>Heb je interesse in deze vacature of ken je iemand die hierin geïnteresseerd kan zijn? Aarzel dan zeker niet om Alyssa van Austin Bright samen met je cv te contacteren via apply @ austinbright.com of bel ons op het nummer 02 808 33 55. We zorgen steeds voor een confidentiële behandeling van je kandidatuur.</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Master TEW: Accountancy </li><li> Prof. bach. Bedrijfsmanagement: Accountancy-fiscaliteit </li><li> Master Handelswetenschappen: Accountancy en fiscaliteit </li><li> Master Handelswetenschappen: Accountancy </li><li> Graduaat Boekhouden - Informatica </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9120 </span><!----> <span> BEVEREN-WAAS </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4>Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Adecco Interim',
        logo: '/assets/logo5.png',
        location: 'Brussel, Vlaams-Brabant'
      },
      tags: [
        'Vaste job',
        'Remote',
        '3-5 jaar'
      ],
      new: false,
      saved: false,
      id: 5
    },
  ]);

  constructor() { }

  getJobs() {
    return this.jobs$;
  }

  getJob(id: number) {
    return this.jobs$.pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }

  addFavorite(objId: any) {
    const vacatures = this.jobs$.getValue().map(item => {
      if (item.id === objId) {
        return {...item, saved: !item.saved}
      }
      return item;
    });
    this.jobs$.next(vacatures);
  }

}
