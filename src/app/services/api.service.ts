import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Result } from '../domains/opleidingen/opleidingen';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  favorites$ = new BehaviorSubject<any[]>([]);
  jobs$ = new BehaviorSubject<any[]>([
    {
      title: 'Technisch administratief bediende',
      location: {
        office: 'Colruyt',
        city: 'Hasselt',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><p>U maakt alle afspraken met de klanten voor opmeting en plaatsing trap</p> <p>U bereidt alle services voor en maakt afspraken met de klant</p> <p>U ordent alle documenten onder het elektronisch dossier</p> <p>U volgt de vorderingsstaten op ter goedkeuring</p> <p>U volgt de facturatieproblemen op</p> <p>U volgt de plaatsersploegen op via archisnapper</p> <p>U doet administratie gekoppeld aan de projecten : check-in..........</p> <p>U beschikt over een takenlijst</p> <p> </p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><p>Zin voor kwaliteit en orde</p> <p>U bent polyvalent en flexibel en hebt geen 9 to 5 mentaliteit</p></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <span> <ul class="competenties"> <li style="white-space: pre-line;">Documenten coderen, klasseren en archiveren</li><li style="white-space: pre-line;">Verplaatsingen van de verantwoordelijke of van teamleden organiseren</li><li style="white-space: pre-line;">Klanten en opdrachtgevers informeren over de vordering van hun dossier en verslagen, vorderingsstaten, tijdspaden, ... doorsturen</li><li style="white-space: pre-line;">Documentatie zoeken, doorsturen of beheren</li><li style="white-space: pre-line;">Technische documenten afdrukken (plannen, maquettes, technische fiches, ...)</li><li style="white-space: pre-line;">Documenten invoeren en de lay-out verzorgen Documenten doorsturen en klasseren</li><li style="white-space: pre-line;">Dossiers voor het inschrijven op een aanbesteding samenstellen, indienen en opvolgen</li><!----> </ul> </span><!----> </span><!----> <span> <h4 class="c-h3 u-mt3">Persoonsgebonden competenties</h4> <ul class="competenties"> <li> Creativiteit </li><li> Plannen en organiseren </li><li> Klantgerichtheid </li><li> Samenwerken </li><li> Flexibiliteit </li><li> Resultaatgerichtheid </li><li> Communiceren </li><li> Zelfstandigheid </li><li> Verantwoordelijkheid </li><!----> </ul> </span><!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p>Afwisselend en uitdagend werk in een klein team</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <span> Colruyt <br> </span><!----> <span> <span> Molenstraat 52 </span><br><!----> <span> 3500 </span><!----> <span> HASSELT </span><!----> <!----> <br> </span> <vej-vacature-map><div id="vej-map"> <a class="c-hyperlink c-icon-text"> Toon op  kaart <i-arrow-down-small class="c-icon-text__icon u-rotate-reset">&gt; </i-arrow-down-small> </a> <!----> </div><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div class="vej-results__sideinfo"> <div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> 2de graad technisch secundair onderwijs (TSO2) </li><!----> <!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Minstens 2 jaar ervaring </li> </ul> <!----><!----> <!----> <!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <li> Contract van onbepaalde duur </li><!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <span> Molenstraat 52 </span><!----> <span> 3500 </span><!----> <span> HASSELT </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4 class="u-hide@print">Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05 u-hide@print"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div> <!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Colruyt Group Technics',
        logo: '/assets/logo1.png',
        location: 'Hasselt, Limburg'
      },
      tags: [
        'Vaste job',
        'Thuiswerk mogelijk',
        '3-5 jaar ervaring'
      ],
      new: true,
      saved: false,
      id: 1
    },
    {
      title: 'Administratief bediende',
      location: {
        office: 'Aertssen Kranen',
        city: 'Tielt',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2" style="color: rgb(226, 0, 26);">Functieomschrijving</h3> <p><p>Houd je van administratieve taken? Ben je een "pietje precies" met zin voor verantwoordelijkheid? Sta je bovendien open voor <strong>weekendwerk</strong>? Dan zijn wij op zoek naar jou!</p><p>•<span> </span>Je zorgt voor de voorbereiding van de goederenontvangsten, dit doe je aan de hand van facturen of zendnotas.</p><p>•<span> </span>Je krijgt een aantal leveranciers toegewezen waar je de retourlijsten van zal opvolgen. Je staat hierbij in nauw contact met de leveranciers.</p><p>•<span> </span>Leveringen nakijken, bij fouten neem je contact op met de desbetreffende aankoper en doe je het nodige.</p><p>•<span> </span>Je volgt promoties op bij de aan jou toegewezen leveranciers.</p><p>•<span> </span>Je helpt mee aan de opmaak van folders (je maakt een overzicht van de artikelnummers op welke paginas staan, je controleert de voorraad en contacteert de aankoper voor een bestelling, je voert de promoties in de winkel in)</p><p>•<span> </span>Tijdens drukke periode ondersteun je de aankoper</p><p>•<span> </span>Je houdt van de artikelvoorraaden in onze twee vestigingen en zorgt voor een gelijke verdeling hiervan.</p><p>•<span> </span>Je plaats artikelen online van de aan jou toegewezen leveranciers.</p><p></p></p> </span><!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(226, 0, 26);">Profiel</h4> <p><p>Je bent in het bezit van een TSO of ASO diploma.</p><p>Je beschrijft jezelf als iemand die zeer <strong>computervaardig</strong> is. Je kan werken met Excel, kennis van SAP of Navision is een troef.</p><p>Je leert snel nieuwe softwarepakketten aan en wil je hier ook verder in verdiepen.</p><p>Je kan zeer snel schakelen.</p><p>Daarnaast heb je de gave om snel gegevens in te putten en te verwerken.</p><p>Je bent gestructureerd en werkt heel nauwkeurig.</p><p></p></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(73, 93, 103);">Jobgerelateerde competenties</h4> <span> <ul class="competenties"> <li style="white-space: pre-line;">Documenten coderen, klasseren en archiveren</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(226, 0, 26);">Aanbod</h4> <span><p>Veelzijdige administratieve functie met <strong>voldoende verantwoordelijkheid</strong>.</p><p>Uurrooster: fulltime van maandagmiddag tot zaterdagmiddag.</p><p></p><p>Ben jij de administratieve enthousiasteling die we zoeken? Solliciteer dan snel!</p></span> </span><!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(73, 93, 103);">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 8700 </span><!----> <span> TIELT </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div class="vej-results__sideinfo"> <div id="vej-detail-summary" class="vej-results__jobmeta"> <h4 style="color: rgb(73, 93, 103);">Vereiste studies</h4> <ul> <li> 3de graad technisch secundair onderwijs (TSO3) </li><li> 3de graad algemeen vormend secundair onderwijs (ASO3) </li><!----> <li> gelijkwaardig door ervaring. </li><!----> </ul> <!----><!----> <h4 style="color: rgb(73, 93, 103);">Werkervaring</h4> <ul id="werkervaring-list"> <li> Geen ervaring </li> </ul> <!----><!----> <!----> <h4 style="color: rgb(73, 93, 103);">Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4 style="color: rgb(73, 93, 103);">Contract</h4> <ul> <li> Vaste Job </li><!----> <li> Contract van onbepaalde duur </li><!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><li> Weekend </li><!----> <!----><!----> </ul> <!----><!----> <h4 style="color: rgb(73, 93, 103);">Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 8700 </span><!----> <span> TIELT </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4 class="u-hide@print" style="color: rgb(73, 93, 103);">Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05 u-hide@print"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div> <!----> </div>',
      online: '16 januari 2024',
      type: 'Deeltijdse job',
      company: {
        name: 'Aertssen Kranen',
        logo: '/assets/logo2.png',
        location: 'Tielt, Limburg'
      },
      tags: [
        'Deeltijdse job',
        '1 jaar ervaring'
      ],
      new: true,
      saved: false,
      id: 2
    },
    {
      title: 'Winkelbediende / keukenhulp',
      location: {
        office: 'Select Technology',
        city: 'Geel',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><p>Zoek je een toffe job in daguren waar je gewaardeerd wordt voor je inzet?</p> <p>Bij Slagerij Vanhoof in Geel ben je aan het juiste adres! Je krijg je een eerlijk loon en erkenning voor je harde werk!</p> <p>We bieden een interessante positie aalsbediende/keukenhulp aan, waarbij je een waardevol onderdeel van ons team wordt.</p> <p>Als nieuwe collega word je een belangrijk deel van ons team. Je krijgt een afwisselende rol waarin je het grootste gedeelte van de week doorbrengt in de keuken.</p> <p>Hier ben je vooral bezig met het bereiden van verschillende gerechten voor de winkel en de traiteursafdeling.</p> <p>Dit gaat van het maken van salades en bereide gerechten tot het samenstellen van barbecue- en vlees schotels voor feesten.</p> <p>Bij ons is het keukenwerk een fluitje van een cent! Alle recepten liggen al klaar; jouw taak is simpelweg om ze te volgen.</p> <p>Maak je geen zorgen, we voorzien een training om je op weg te helpen. Alles gebeurt machinaal, van het snijden van groenten tot het mengen van salades.</p> <p>Jij hoeft alleen maar de ingrediënten af te wegen en toe te voegen. De afwas achteraf moet je natuurlijk ook mee doen, koken in een vuile keuken gaat nu eenmaal niet.</p> <p>Naast je werk in de keuken help je ook klanten aan de toonbank in onze winkel. Die mix van keukenwerk en klantenservice maakt deze job extra interessant.</p> <p>Bij ons werk je in een klein team waar iedereen weet wat hard werken is en waar waardering en gezelligheid vooropstaan.</p> <p>Je werktijden vallen tussen 7u s ochtends en 19u s avonds, waarbij je afwisselend een zaterdagvoormiddag werkt en de andere week een volledige zaterdag.</p> <p> </p> <p>Interesse? Solliciteer snel!</p> <p> </p> <p>Vragen? contacteer ons op <strong><em>slagerijvanhoof@telenet.be </em></strong></p> <p> </p> <p><strong><span>Functievereisten:</span></strong></p> <p> </p> <p>• Vloeiend Nederlands spreken.</p> <p>• Passie voor keukenwerk.</p> <p>• Bereidheid om voltijds of 4/5de te werken, met zaterdag als verplichte werkdag en geen werk op zondagen.</p> <p>•</p> <p><strong><span>Arbeidsvoorwaarden:</span></strong></p> <p> </p> <p>• Minimaal netto salaris van €2000 per maand.</p> <p>• Voltijds of 4/5de vast contract (vrije dag tijdens de werkweek, zaterdag is een must)</p> <p>• Vergoeding voor woon-werkverkeer.</p> <p>• 15% korting op alle producten.</p> <p>• Eindejaarspremie.</p> <p>• Opleiding op de werkvloer.</p> <p>• Collectieve sluiting tijdens krokus- en herfstvakantie, en tijdens bouwverlof</p> <p>• Betrokkenheid bij mooie projecten en een hechte teamsfeer.</p> <p> </p> <p>Solliciteer vandaag nog via: <strong><em>slagerijvanhoof@telenet.be </em></strong>en wie weet word jij onze nieuwe collega!</p></p> </span><!----> <!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <span> <ul class="competenties"> <li style="white-space: pre-line;">De ingrediënten doseren en mengen</li><li style="white-space: pre-line;">Het werkblad en het keukengerei klaarmaken Toestellen aanzetten (ovens, kookplaten, ...)</li><li style="white-space: pre-line;">Bereidingen en producten verpakken en etiketteren (fabricatie- en houdbaarheidsdata) Ze opbergen in de koelruimte, de voorraadkamer, ...</li><li style="white-space: pre-line;">De gerechten opmaken om op te dienen (presentatie, samenstelling, afwerking, ...)</li><li style="white-space: pre-line;">De werkpost en het keukengerei onderhouden en schoonmaken</li><li style="white-space: pre-line;">De voorraad opvolgen, tekorten vaststellen Bestellingen plaatsen</li><li style="white-space: pre-line;">Groenten en fruit wassen en schoonmaken</li><li style="white-space: pre-line;">Vlees, vis, groenten, ... koken of opwarmen</li><li style="white-space: pre-line;">Vlees en vis voorbereiden (schoonmaken, snijden, opbinden, omwikkelen, ...)</li><li style="white-space: pre-line;">De goederen ontvangen en controleren De goederen opslaan in een koelkamer of voorraadkamer</li><li style="white-space: pre-line;">Een soort product bereiden: Vlees</li><li style="white-space: pre-line;">Een soort product bereiden: Traiteurproducten</li><!----> </ul> </span><!----> </span><!----> <span> <h4 class="c-h3 u-mt3">Persoonsgebonden competenties</h4> <ul class="competenties"> <li> Stressbestendigheid </li><li> Verantwoordelijkheid </li><li> Samenwerken </li><li> Zelfstandigheid </li><li> Digitaal denken </li><li> Flexibiliteit </li><!----> </ul> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <span> Select Technology <br> </span><!----> <span> <span> Zwaluwenstraat 23 </span><br><!----> <span> 2440 </span><!----> <span> GEEL </span><!----> <!----> <br> </span> <vej-vacature-map><div id="vej-map"> <a class="c-hyperlink c-icon-text"> Toon op  kaart <i-arrow-down-small class="c-icon-text__icon u-rotate-reset">&gt; </i-arrow-down-small> </a> <!----> </div><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div class="vej-results__sideinfo"> <div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Secundair volwassenenonderwijs </li><!----> <!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Beperkte ervaring ( &lt; 2 jaar ) </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <li> Contract van onbepaalde duur </li><!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <span> Zwaluwenstraat 23 </span><!----> <span> 2440 </span><!----> <span> GEEL </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4 class="u-hide@print">Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05 u-hide@print"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div> <!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Select Technology',
        logo: '/assets/logo3.jpg',
        location: 'Geel, Limburg'
      },
      tags: [
        'Vaste job',
        'geen ervaring vereist'
      ],
      new: false,
      saved: false,
      id: 3
    },
    {
      title: 'Onthaalbediende',
      location: {
        office: 'Square City',
        city: 'Gent',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2">Functieomschrijving</h3> <p><p><span>Als onthaalmedewerker ben je in de eerste plaats het vriendelijke gezicht dat onze bezoekers verwelkomt en begeleidt.</span></p> <ul> <li><span>Je bent het eerste <strong>aanspreekpunt</strong> voor klanten, leveranciers en bezoekers. </span></li> <li><span>Je vormt een <strong>duo</strong> met je collega telefonist zodat er een optimale aanwezigheid aan de balie verzekerd wordt. Evenzeer ben je <strong>back-up voor de telefonie</strong>. </span></li> <li><span>Je ondersteunt zowel op administratief als organisatorisch vlak de collega’s van diverse diensten alsook de directie. Zo word je ingezet voor de <strong>opvolging van openstaande vorderingen</strong>, in samenwerking met de collega’s van de boekhouding</span></li> <li><span>Je zet de vergaderruimtes en de opleidingslokalen klaar en staat in voor de reservaties ervan (agendabeheer) </span></li> <li><span>Heeft een collega nieuwe visitekaartjes of een stempel nodig? Moet er een PowerPointpresentatie opgemaakt worden? Jij schiet telkens in actie!</span></li> <li><span>Je werkt systematisch, georganiseerd en conform de richtlijnen die je krijgt.</span></li> </ul> <p><span>Kortom, een hands-on job met veel sociaal contact!</span></p></p> </span><!----> <span> <h4 class="c-h3 u-mt3">Profiel</h4> <p><ul> <li><span>Je bent een administratieve duizendpoot. </span></li> <li><span>Je kan vlot overweg met moderne softwareprogramma’s. </span></li> <li><span>Communicatie en klantgerichtheid zijn jouw sterktes. </span></li> <li><span>Je bent een uitgesproken flexibele team player maar je kan ook zelfstandig werken. </span></li> <li><span>Verder beheers je vloeiend het Nederlands en Frans, maar je hebt ook voldoende kennis van het Engels. </span></li> </ul></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3">Jobgerelateerde competenties</h4> <span> <ul class="competenties"> <li style="white-space: pre-line;">Personen onthalen en hun vraag identificeren</li><li style="white-space: pre-line;">Een gesprekspartner adviseren en bijstaan bij administratieve en dagdagelijkse aspecten</li><li style="white-space: pre-line;">Kopiëren, klasseren, intikken, lay-out verzorgen, ... van documenten</li><li style="white-space: pre-line;">Telefonische oproepen aannemen Doorverbinden naar de gevraagde gesprekspartners Een boodschap noteren</li><li style="white-space: pre-line;">Gegevens op computer raadplegen, invoeren of bijwerken (aanmaken van badges, inschrijving in registers, rapporten van telefonische oproepen, ...)</li><li style="white-space: pre-line;">Briefwisseling registreren, sorteren, frankeren</li><li style="white-space: pre-line;">Personen informeren en doorverwijzen of begeleiden naar de gevraagde gesprekspartner, dienst of plaats</li><!----> </ul> </span><!----> </span><!----> <span> <h4 class="c-h3 u-mt3">Persoonsgebonden competenties</h4> <ul class="competenties"> <li> Zorgvuldigheid </li><li> Digitaal denken </li><li> Stressbestendigheid </li><li> Assertiviteit </li><li> Zelfstandigheid </li><li> Communiceren </li><li> Samenwerken </li><li> Resultaatgerichtheid </li><li> Klantgerichtheid </li><li> Verantwoordelijkheid </li><!----> </ul> </span><!----> <span> <h4 class="c-h3 u-mt3">Aanbod</h4> <span><p><span>Naast een heel gevarieerde job met veel sociaal contact én met de nodige aandacht voor de work-life balance, <span> </span>bieden we je ook nog:</span></p> <ul type="disc"> <li><span>Marktconform loon</span></li> <li><span>Groepsverzekering</span></li> <li><span>Maaltijdcheques</span></li> <li><span>GSM/Smartphone </span></li> <li><span>Laptop</span></li> <li><span>Forfaitaire kosten</span></li> <li><span>Cafetaria plan</span></li> <li><span>Extralegale vakantiedagen</span></li> <li><span>Anciënniteitsverlof</span></li> </ul></span> </span><!----> <span> <h4 class="c-h3 u-mt3">Plaats tewerkstelling</h4> <div> <span> Square City <br> </span><!----> <span> <span> Opvoedingstraat 143 </span><br><!----> <span> 9000 </span><!----> <span> GENT </span><!----> <!----> <br> </span> <vej-vacature-map><div id="vej-map"> <a class="c-hyperlink c-icon-text"> Toon op  kaart <i-arrow-down-small class="c-icon-text__icon u-rotate-reset">&gt; </i-arrow-down-small> </a> <!----> </div><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div class="vej-results__sideinfo"> <div id="vej-detail-summary" class="vej-results__jobmeta"> <h4>Vereiste studies</h4> <ul> <li> Graduaat (ingericht vanaf 2019) </li><li> Professioneel (gerichte) bachelor (PBA) </li><!----> <!----> </ul> <!----><!----> <h4>Werkervaring</h4> <ul id="werkervaring-list"> <li> Beperkte ervaring ( &lt; 2 jaar ) </li> </ul> <!----><!----> <!----> <h4>Talenkennis</h4> <ul> <li> Frans (zeer goed) </li><li> Nederlands (zeer goed) </li><li> Engels (goed) </li><!----> </ul> <!----><!----> <!----> <h4>Contract</h4> <ul> <li> Vaste Job </li><!----> <li> Contract van onbepaalde duur </li><!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4>Plaats tewerkstelling</h4> <ul> <!----> <li> <span> Opvoedingstraat 143 </span><!----> <span> 9000 </span><!----> <span> GENT </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4 class="u-hide@print">Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05 u-hide@print"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div> <!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Square City',
        logo: '/assets/logo4.png',
        location: 'Gent, Oost-Vlaanderen'
      },
      tags: [
        'Vaste job',
        'Thuiswerk mogelijk'
      ],
      new: false,
      saved: false,
      id: 4
    },
    {
      title: 'Administratief bediende',
      location: {
        office: 'Adecco Interim',
        city: 'Temse',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      html: '<div class="vej-results__info"> <span> <h3 class="c-h2" style="color: rgb(0, 51, 153);">Functieomschrijving</h3> <p>Voor een bedrijf in Temse zijn we op zoek naar een administratief bediende. <p>Jouw takenpakket ziet er als volgt uit: </p><p>- orderverwerking + facturatie;</p><p>- Facturen transport verwerken + Purchase Orders voor transport; </p><p>- rapporteringen opmaken; </p><p>- klantencontact; </p><p>- contact met het magazijn;</p><p>- mee instaan voor het logistieke gedeelte.</p><p><b>Bedrijfsprofiel:</b></p>Bedrijf dat instaat voor de distributie van autoruiten.<p></p></p> </span><!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(0, 51, 153);">Profiel</h4> <p>- Je hebt een eerste ervaring als administratief bediende;<p>- Je spreek perfect Nederlands en hebt een zeer goede kennis van het Engels; </p><p>- Je kan werken met MS-office en hebt bij voorkeur ervaring met SAP; </p><p>- Je hebt een zeer goede kennis van excel (draaitabellen, vlookop, formules toepassen, ...) </p><p>- Je bent flexibel, pro-actief en accuraat; </p><p>- Je kan je verplaatsen tot Temse. </p><p>- Vast contract met een marktconform loon en extralegale voordelen - Je komt terecht in een klein team van 4 collegas; - Er wordt opleiding voorzien; - thuiswerkmogelijkheden zijn te bespreken - je bent voltijds beschikbaar</p></p> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(0, 102, 204);">Jobgerelateerde competenties</h4> <span> <ul class="competenties"> <li style="white-space: pre-line;">Klanten, leveranciers, bezoekers ontvangen en oriënteren Boodschappen noteren en afspraken vastleggen</li><li style="white-space: pre-line;">De voorraad opvolgen, tekorten vaststellen Bestellingen plaatsen</li><li style="white-space: pre-line;">Gegevens voor de opvolging van de activiteit bijwerken (situatieoverzichten, resultatentabellen, ...)</li><!----> </ul> </span><!----> </span><!----> <!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(0, 51, 153);">Aanbod</h4> <span>- Vast contract met een marktconform loon en extralegale voordelen<p>- Je komt terecht in een klein team van 4 collegas;</p><p>- Er wordt opleiding voorzien; </p><p>- thuiswerkmogelijkheden zijn te bespreken</p><p>- je bent voltijds beschikbaar</p><p></p></span> </span><!----> <span> <h4 class="c-h3 u-mt3" style="color: rgb(0, 102, 204);">Plaats tewerkstelling</h4> <div> <!----> <span> <!----> <span> 9140 </span><!----> <span> TEMSE </span><!----> <!----> <br> </span> <vej-vacature-map><!----> </vej-vacature-map> </div> </span><!----> <!----> <!----> </div>',
      highlight: '<div class="vej-results__sideinfo"> <div id="vej-detail-summary" class="vej-results__jobmeta"> <h4 style="color: rgb(0, 102, 204);">Vereiste studies</h4> <ul> <li> 3de graad technisch secundair onderwijs (TSO3) </li><li> Professioneel (gerichte) bachelor (PBA) </li><li> 3de graad algemeen vormend secundair onderwijs (ASO3) </li><!----> <!----> </ul> <!----><!----> <h4 style="color: rgb(0, 102, 204);">Werkervaring</h4> <ul id="werkervaring-list"> <li> Beperkte ervaring ( &lt; 2 jaar ) </li> </ul> <!----><!----> <!----> <h4 style="color: rgb(0, 102, 204);">Talenkennis</h4> <ul> <li> Nederlands (zeer goed) </li><li> Engels (zeer goed) </li><!----> </ul> <!----><!----> <!----> <h4 style="color: rgb(0, 102, 204);">Contract</h4> <ul> <li> Vaste Job </li><!----> <li> Contract van onbepaalde duur </li><!----> <li> Voltijds </li><!----> <!----> <li> Dagwerk </li><!----> <!----><!----> </ul> <!----><!----> <h4 style="color: rgb(0, 102, 204);">Plaats tewerkstelling</h4> <ul> <!----> <li> <!----> <span> 9140 </span><!----> <span> TEMSE </span><!----> </li><!----> </ul> <!----><!----> <!----> <!----> <h4 class="u-hide@print" style="color: rgb(0, 102, 204);">Hoe goed pas ik bij deze vacature?</h4> <span> <div class="c-gauge u-mt05 u-hide@print"> <vdab-gauge hidevalue="true" component="button"> Log in om te ontdekken </vdab-gauge> </div> </span> <!----><!----> </div> <!----> </div>',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Adecco Interim',
        logo: '/assets/logo5.png',
        location: 'Temse, Vlaams-Brabant'
      },
      tags: [
        'Vaste job',
        '3-5 jaar ervaring'
      ],
      new: false,
      saved: false,
      id: 5
    },
  ]);
  opleidingen$ = new BehaviorSubject<Result[]>([
    {
      id: 24,
      saved: false,
      partner: 'CVO Focus',
      prijs: 960,
      duurtijd: 'tussen 2 en 4 maanden',
      leerbewijs: 'Certificaat',
      intensiteit: '20 uren / week',
      watJeLeert: [
        'Je doet grondige theoretische kennis op van huid, haar, materialen en producten',
        'Je leert alle nodige technieken: knippen, brushings, kleuren, permanenten …',
        'Je oefent in onze professioneel uitgeruste lokalen: eerst op poppen, daarna op echte modellen',
        'We hebben aandacht voor het sociale aspect: je leert omgaan met verschillende types klanten',
        'Je doet praktijkervaring op in verschillende stages',
      ],
      modules: [
        {
          name: 'Haren knippen',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Haren wassen',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Haren brushen',
          leervorm: 'Online leren',
          duurtijd: '20 uren',
        },
        {
          name: 'Haren stylen',
          leervorm: 'Stage',
          duurtijd: '100 uren',
        },
      ],
      locaties: [
        {
          stad: 'Lokeren',
          adres: 'Lokerenstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'CVO Focus',
          duurtijd: 'Gemiddeld 2 maanden',
          intensiteit: '30u/week',
        },
      ],
      toelatingsvoorwaarden: [
        'Iedereen is welkom voor deze basiscursus. Er is geen voorkennis vereist.',
      ],
      beschrijving: 'Je ziet er graag verzorgd uit en wil leren hoe je je haar het beste hanteert, verzorgt of brusht? Wil je je familieleden een trendy kapsel geven? Of wil je van haarkappen je beroep maken? Dan ben je in onze cursus haartooi op het juiste adres! Je leert eerst de producten en gereedschappen kennen die je nodig hebt in het kappersvak. Verder leer je de basistechnieken van haarverzorging, snit en haarkleuren. Je leert de basistechnieken van de permanent en basissnitten, zowel voor dames als voor heren. In de module kleuren gaan we in de diepte over kleuren en de theoretische achtergrond. Ook modegerichte oproltechniekenen steuntechnieken worden aangeleerd. in de module gelegenheidskapsels leer je trendy opsteektechnieken en ontkrul- en steuntechnieken. Verder leer je in teamverband te werken, je hebt aandacht voor het creatieve en modebewuste en leert probleemoplossend te denken en te handelen. Ook het aanleren van snitten en kapsels voor heren komt aan bod: zowel klassieke als modesnits. Verder leer je specifieke technieken zoals scheren en baardknippen. Dan volgt de salonpraktijk. Je kiest zelf hoeveel modules je volgt, naargelang je tijd en werksituatie. De trajectbegeleider kapper helpt je bij het opstellen van een op maat gemaakt traject.',
      name: 'Kapper',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Creatief',
      filterGratis: 'Betalend',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'CVO Focus',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 2,
      videoUrl: '/assets/video-verzorgende.png',
      mapImg: '/assets/detail-map.png',
      saved: false,
      prijs: 1250,
      duurtijd: 'tussen 11 en 13 maanden',
      leerbewijs: 'Erkend bekwaamheidsattest',
      intensiteit: '30 uren / week',
      watJeLeert: [
        'In de eerste module van 300 uur maak je kennis met de zorgsector, is er veel aandacht voor je leerproces en algemene attitudes, communicatie en leer je vooral huishoudelijke- en logistieke vaardigheden en pas je die toe in een stage van 50 uur.',
        'In de tweede module van +- 1020 uur maak je kennis met specifieke zorgsituaties, leer je vooral verzorgende- en zorgkundige handelingen en pas je die toe in een stage van 600 uur in de thuiszorg en residentiële zorg.',
        'De voornaamste theoretische vakken zijn : omgangskunde, verzorging, zorg voor woon- en leefklimaat, werken in de zorgsector, logistieke vaardigheden, specifieke zorgsituaties, ziekteleer en EHBO.',
        'Tijdens de praktijklessen pas je zorg- en huishoud technieken toe en oefen je hef- en tiltechnieken.',
        'Tijdens de stages help je bij de lichaamsverzorging, huishoudelijke taken en ondersteun je de zorgvrager op sociaal en psychisch vlak.',
        'Je werkt aan je sociale en communicatieve vaardigheden.',
      ],
      modules: [
        {
          name: 'Kennismaking zorgsector',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Specifieke zorgsituaties',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Theorie: ziekteleer en EHBO',
          leervorm: 'Online leren',
          duurtijd: '100 uren',
        },
        {
          name: 'Praktijklessen',
          leervorm: 'Stage',
          duurtijd: '100 uren',
        },
        {
          name: 'Sociale en communicatieve vaardigheden',
          leervorm: 'Stage',
          duurtijd: '100 uren',
        },
      ],
      locaties: [
        {
          stad: 'Aalst',
          adres: 'Demerstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Antwerpen',
          adres: 'Langestraat 24',
          startdatum: 'Januari 2026',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Hasselt',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Brugge',
          adres: 'Stationsstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Open voor iedereen',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Brussel',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Geel',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Gent',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Hasselt',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Lommel',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Veurne',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
      ],
      toelatingsvoorwaarden: [
        'Je hebt geen werk en bent ingeschreven als (deeltijds) werkzoekende, of',
        'je bent ingeschreven als tijdelijk werkloze, of',
        'je zit in je opzegperiode, of',
        'je werkt in de sociale economie, of',
        'je ontvangt een ziekte-uitkering en hebt toestemming van je ziekenfonds.',
      ],
      beschrijving: 'Ben je sociaal ingesteld en help je graag andere mensen? Volg dan de opleiding tot verzorgende en zorgkundige. Je hebt het hart op de juiste plaats, bent geduldig en steekt graag de handen uit de mouwen. Je werkt graag met zorgbehoevende ouderen, gezinnen met kinderen, chronisch zieken of personen met een handicap en je kan je goed aanpassen. Als verzorgende in de thuiszorg ondersteun je personen die thuis bepaalde taken niet meer alleen kunnen doen door ziekte, een handicap of sociale omstandigheden. Een zorgkundige werkt in teamverband in woonzorgcentra en zorgt voor een aangename nieuwe thuis in de residentie. Wil je ontdekken of een job als verzorgende/zorgkundige iets voor jou is? Neem dan zeker het digitaal infopakket al eens door! Nog geen diploma secundair onderwijs? Combineer de beroepsopleiding met algemene vakken. Zo behaal je het diploma secundair onderwijs.',
      name: 'Verzorgende',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Gezondheid',
      filterGratis: 'Betalend',
      filterStartdatum: 'April 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 1,
      videoUrl: '/assets/video-kapper.png',
      mapImg: '/assets/detail-map.png',
      saved: false,
      prijs: 420,
      duurtijd: 'tussen 3 en 6 maanden',
      leerbewijs: 'Diploma',
      intensiteit: '20 uren / week',
      watJeLeert: [
        'Je doet grondige theoretische kennis op van huid, haar, materialen en producten',
        'Je leert alle nodige technieken: knippen, brushings, kleuren, permanenten …',
        'Je oefent in onze professioneel uitgeruste lokalen: eerst op poppen, daarna op echte modellen',
        'We hebben aandacht voor het sociale aspect: je leert omgaan met verschillende types klanten',
        'Je doet praktijkervaring op in verschillende stages',
      ],
      modules: [
        {
          name: 'Haren knippen',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Haren wassen',
          leervorm: 'Groepsleren',
          duurtijd: '100 uren',
        },
        {
          name: 'Haren brushen',
          leervorm: 'Online leren',
          duurtijd: '20 uren',
        },
        {
          name: 'Haren stylen',
          leervorm: 'Stage',
          duurtijd: '100 uren',
        },
      ],
      locaties: [
        {
          stad: 'Hasselt',
          adres: 'Demerstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Herentals',
          adres: 'Langestraat 24',
          startdatum: 'Januari 2026',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Hasselt',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Brugge',
          adres: 'Stationsstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Open voor iedereen',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
        {
          stad: 'Antwerpen',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: 'Gemiddeld 6 maanden',
          intensiteit: '20u/week',
        },
      ],
      toelatingsvoorwaarden: [
        'Je hebt geen werk en bent ingeschreven als (deeltijds) werkzoekende, of',
        'je bent ingeschreven als tijdelijk werkloze, of',
        'je zit in je opzegperiode, of',
        'je werkt in de sociale economie, of',
        'je ontvangt een ziekte-uitkering en hebt toestemming van je ziekenfonds.',
      ],
      beschrijving: 'Je ziet er graag verzorgd uit en wil leren hoe je je haar het beste hanteert, verzorgt of brusht? Wil je je familieleden een trendy kapsel geven? Of wil je van haarkappen je beroep maken? Dan ben je in onze cursus haartooi op het juiste adres! Je leert eerst de producten en gereedschappen kennen die je nodig hebt in het kappersvak. Verder leer je de basistechnieken van haarverzorging, snit en haarkleuren. Je leert de basistechnieken van de permanent en basissnitten, zowel voor dames als voor heren. In de module kleuren gaan we in de diepte over kleuren en de theoretische achtergrond. Ook modegerichte oproltechniekenen steuntechnieken worden aangeleerd. in de module gelegenheidskapsels leer je trendy opsteektechnieken en ontkrul- en steuntechnieken. Verder leer je in teamverband te werken, je hebt aandacht voor het creatieve en modebewuste en leert probleemoplossend te denken en te handelen. Ook het aanleren van snitten en kapsels voor heren komt aan bod: zowel klassieke als modesnits. Verder leer je specifieke technieken zoals scheren en baardknippen. Dan volgt de salonpraktijk. Je kiest zelf hoeveel modules je volgt, naargelang je tijd en werksituatie. De trajectbegeleider kapper helpt je bij het opstellen van een op maat gemaakt traject.',
      name: 'Kapper/Kapster',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Creatief',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 3,
      duurtijd: 'tussen 3 en 6 maanden',
      name: 'Nederlands - Nederlandse spelling',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Talen',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 4,
      saved: false,
      videoUrl: '/assets/video-assertiviteit.png',
      duurtijd: '6 uren',
      leerbewijs: 'Certificaat',
      intensiteit: '1 uur / module',
      watJeLeert: [
        'Welkom: het belang van assertief communiceren',
        'Wat is assertieve communicatie?',
        'Waarom ben je niet altijd assertief?',
        'Welke verschillende gedragsstijlen zijn er?',
        'Hoe kan je assertief zijn?',
        'En nu? Je actieplan.',
      ],
      modules: [
        {
          name: 'Welkom: het belang van assertief communiceren',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
        {
          name: 'Wat is assertieve communicatie?',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
        {
          name: 'Waarom ben je niet altijd assertief?',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
        {
          name: 'Welke verschillende gedragsstijlen zijn er?',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
        {
          name: 'Hoe kan je assertief zijn?',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
        {
          name: 'En nu? Je actieplan.',
          leervorm: 'Online leren',
          duurtijd: '1 uur',
        },
      ],
      toelatingsvoorwaarden: [
        'Je kan alleen deelnemen als je je vooraf inschrijft voor deze opleiding met je VDAB-account',
        'Deze cursus is enkel geschikt voor gebruik op tablet, laptop en desktop',
      ],
      beschrijving: 'Assertiviteit, dat ken je wellicht wel: dat is opkomen voor je eigen wensen en behoeften. Maar dat dagelijks in de praktijk brengen, is een ander ding! Je wil de goede relatie met de ander niet verstoren, je vindt dat je perfect moet zijn en je vreest dat de ander misbruik zal maken van je getoonde emoties. Nee zeggen lukt je niet. Je laat over je heen lopen, lijdt gezichtsverlies en kropt je ongenoegen op. Herken je het plaatje? Dan is deze online cursus geknipt voor jou. Je leert beter om te gaan met onverwachte situaties en stress. Je ontdekt hoe je krachtig nee zegt en omgaat met weerstand. Kortom, je leert correct en assertief reageren. Je bent niet verplicht het hele pakket te volgen. Je kan je beperken tot datgene wat je direct nodig hebt. Je bepaalt zelf je leerplek en leermomenten. De cursus is 24u op 24 toegankelijk via het internet.',
      name: 'Assertiviteit in de werksituatie',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Zelfontplooiing',
      filterGratis: 'Gratis voor iedereen',
      filterStartdatum: 'December 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online opleiding',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 5,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Bekister',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Bouw',
      filterGratis: 'Betalend',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 9,
      saved: false,
      mapImg: '/assets/detail-map.png',
      duurtijd: '5 uren',
      leerbewijs: 'Erkend bekwaamheidsattest',
      intensiteit: '1 dag',
      watJeLeert: [
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. ',
        'Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde ',
        'om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen ',
        'in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen',
        'met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.',
      ],
      modules: [
        {
          name: 'Deel 1',
          leervorm: 'Groepsleren',
          duurtijd: '1 uur',
        },
        {
          name: 'Deel 2',
          leervorm: 'Groepsleren',
          duurtijd: '2 uur',
        },
        {
          name: 'Deel 3',
          leervorm: 'Groepsleren',
          duurtijd: '1 uur',
        },
        {
          name: 'Deel 4',
          leervorm: 'Groepsleren',
          duurtijd: '1 uur',
        },
      ],
      locaties: [
        {
          stad: 'Asse',
          adres: 'Demerstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: 'volzet'
        },
        {
          stad: 'Brugge',
          adres: 'Langestraat 24',
          startdatum: 'Januari 2026',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Hasselt',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: 'volzet'
        },
        {
          stad: 'Diest',
          adres: 'Stationsstraat 12',
          startdatum: 'September 2025',
          wachttijd: '1 maand',
          doelgroep: 'Open voor iedereen',
          leervorm: 'Groepsleren',
          lesgever: 'VDAB opleidingscentrum',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: '3 (van 4)'
        },
        {
          stad: 'Halle',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: '6 (van 8)'
        },
        {
          stad: 'Heverlee',
          adres: 'Leiestraat 24',
          startdatum: 'Maart 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: 'volzet'
        },
        {
          stad: 'Tienen',
          adres: 'Leiestraat 24',
          startdatum: 'Oktober 2025',
          wachttijd: '1 maand',
          doelgroep: 'Werkzoekende',
          leervorm: 'Groepsleren',
          lesgever: 'Syntra Antwerpen',
          duurtijd: '5 uren',
          intensiteit: '1 dag',
          beschikbareplaatsen: '4 (van 6)'
        },
      ],
      toelatingsvoorwaarden: [
        'Om deze workshop te volgen, moet je je inschrijven. Hiervoor heb je een VDAB-account nodig.',
      ],
      beschrijving: 'In deze workshop krijg je inzicht in het productieproces bij 3D-printing. Je leert stap voor stap hoe je een CAD-model succesvol print.  Afhankelijk van de gekozen locatie kunnen er meerdere 3D-print technologieën aan bod komen. Je past de theorie meteen in de praktijk toe.',
      name: '3D-printing',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Gratis voor iedereen',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Workshop',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 6,
      duurtijd: '4 uren',
      name: 'Powerpoint voor managers',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Professionele ontplooiing',
      filterGratis: 'Gratis opleidingen voor wie werk heeft',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Workshop',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 7,
      duurtijd: '1 dag',
      name: 'Leren werken met een computer',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Digitale vaardigheden',
      filterGratis: 'Betalend',
      filterStartdatum: 'December 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 8,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Leerkracht wiskunde',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Onderwijs',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 10,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Poetsvrouw / Poetsman',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Onderhoud',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online opleiding',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 11,
      duurtijd: 'tussen 1 en 2 maanden',
      name: 'Vertaler Russisch - Nederlands',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Communicatie',
      filterGratis: 'Betalend',
      filterStartdatum: 'Januari 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 12,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Bankbediende KBC',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Financieel',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Mei 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 13,
      duurtijd: 'tussen 2 en 4 maanden',
      name: 'Boer verzorging kalveren',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Land- en tuinbouw',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Februari 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 14,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Klusjesman Center Parks',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Techniek',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: '1 op 1 (individueel)',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 15,
      duurtijd: '6 uren',
      name: 'Marketing assistent - social media',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Marketing',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Juni 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 16,
      duurtijd: '4 uren',
      name: 'Management opleiding',
      filterCategorie: 'Persoonlijke en professionele groei',
      filterSubCategorie: 'Professionele ontplooiing',
      filterGratis: 'Betalend',
      filterStartdatum: 'September 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Workshop',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 17,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Onderzoeken beheren',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Onderzoek en ontwikkeling',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'December 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 18,
      duurtijd: 'tussen 1 en 2 maanden',
      name: 'Rijbewijs CE',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Logistiek en transport',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'Maart 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online opleiding',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Ja',
    },
    {
      id: 19,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Administratieve taken beheer',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Administratie',
      filterGratis: 'Gratis opleidingen voor wie werk heeft',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online opleiding',
      filterOrganisator: 'Andere',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 20,
      duurtijd: '5 dagen',
      name: 'Verkopen van stofzuigers',
      filterCategorie: 'Beroepsopleidingen en specialisatie',
      filterSubCategorie: 'Verkoop',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'November 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Op locatie',
      filterLeervorm: 'Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 21,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Nederlands - spelling',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Betalend',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Op locatie en online',
      filterLeervorm: 'Duaal leren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 22,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Nederlands - algemeen',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Gratis opleidingen voor wie werk heeft',
      filterStartdatum: 'Oktober 2025',
      filterLesmoment: 'Buiten de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online opleiding',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
    {
      id: 23,
      duurtijd: 'tussen 6 en 12 maanden',
      name: 'Nederlands - werkwoorden',
      filterCategorie: 'Nederlands voor anderstaligen',
      filterSubCategorie: '',
      filterGratis: 'Gratis opleidingen voor wie geen werk heeft of een uitkering ontvangt',
      filterStartdatum: 'November 2025',
      filterLesmoment: 'Tijdens de kantooruren',
      filterWaarLeerJe: 'Online',
      filterLeervorm: 'Online Groepsleren',
      filterOrganisator: 'VDAB',
      filterKnelpuntberoep: 'Nee',
    },
  ]);
  opleidingFilters$ = new BehaviorSubject<any[]>([
    {
      title: 'Categorie',
      groupName: 'filterCategorie',
      filters: ['Beroepsopleidingen en specialisatie', 'Persoonlijke en professionele groei']
    },
    {
      title: 'Gratis',
      groupName: 'filterGratis',
      filters: ['Gratis opleidingen voor wie geen werk heeft', 'Gratis opleidingen voor iedereen']
    },
    {
      title: 'Startdatum',
      groupName: 'filterStartdatum',
      filters: ['December 2025', 'Januari 2025', 'Februari 2025', 'Maart 2025', 'April 2025', 'Mei 2025', 'Juni 2025', 'Juli 2025', 'Augustus 2025', 'September 2025', 'Oktober 2025', 'November 2025', 'December 2025']
    },
    {
      title: 'Lesmoment',
      groupName: 'filterLesmoment',
      filters: ['Buiten de kantooruren', 'Tijdens de kantooruren']
    },
    {
      title: 'Leervorm',
      groupName: 'filterLeervorm',
      filters: ['Afstandsleren', 'Duaal leren', 'Groepsleren', 'Online leren', 'Workshop']
    },
    {
      title: 'Organisator',
      groupName: 'filterOrganisator',
      filters: ['VDAB', 'Andere']
    },
    {
      title: 'Knelpuntberoep',
      groupName: 'filterKnelpuntberoep',
      filters: ['Ja', 'Nee']
    },
  ]);

  constructor() { }

  getJobs() {
    return this.jobs$;
  }

  getOpleidingen() {
    return this.opleidingen$;
  }

  getOpleidingFilters() {
    return this.opleidingFilters$;
  }

  getJob(id: number) {
    return this.jobs$.pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }
  
  getOpleiding(id: number) {
    return this.opleidingen$.pipe(
      map(opleidingen => opleidingen.find(opleiding => opleiding.id === id))
    );
  }

  addFavorite(objId: any) {
    const vacatures = this.jobs$.getValue().map(item => {
      if (item.id === objId) {
        return { ...item, saved: !item.saved }
      }
      return item;
    });
    this.jobs$.next(vacatures);
  }
  
  addFavoriteOpleiding(objId: any) {
    const opleidingen = this.opleidingen$.getValue().map(item => {
      if (item.id === objId) {
        return { ...item, saved: !item.saved }
      }
      return item;
    });
    this.opleidingen$.next(opleidingen);
  }

}
