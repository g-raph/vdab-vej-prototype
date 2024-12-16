import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-studieboom',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './studieboom.component.html',
  styleUrl: './studieboom.component.scss'
})
export class StudieboomComponent implements OnInit {
  myForm!: FormGroup;
  showSecondSelect = false;
  showThirdSelect = false;
  showFourthSelect = false;
  showFinalField = false;

  firstSelectOptions = [
    { id: 1, name: 'Lager en buitengewoon lager onderwijs' },
    { id: 2, name: 'Secundair onderwijs' },
    { id: 3, name: 'Graduaat & HBO5' },
    { id: 4, name: 'Bachelor' },
    { id: 5, name: 'Master' }
  ];
  secondSelectOptions = [
    { id: 1, name: '1ste graad secundair onderwijs', categoryId: 2 },
    { id: 2, name: 'Leertijd en ondernemerschapsopleiding', categoryId: 2 },
    { id: 3, name: 'Deeltijds beroepssecundair onderwijs (DBSO)', categoryId: 2 },
    { id: 4, name: 'Buitengewoon secundair onderwijs', categoryId: 2 },
    { id: 5, name: 'Algemeen secundair onderwijs (ASO)', categoryId: 2 },
    { id: 6, name: 'Beroepssecundair onderwijs (BSO)', categoryId: 2 },
    { id: 7, name: 'Technisch secundair onderwijs (TSO)', categoryId: 2 },
    { id: 8, name: 'Kunstsecundair onderwijs (KSO)', categoryId: 2 },
    
    { id: 9, name: 'Bouw en hout', categoryId: 3 },
    { id: 10, name: 'Communicatie en informatie', categoryId: 3 },
    { id: 11, name: 'Economie en organisatie', categoryId: 3 },
    { id: 12, name: 'Elektromechanica en energie', categoryId: 3 },
    { id: 13, name: 'Gezondheid en welzijn', categoryId: 3 },
    { id: 14, name: 'Kunst, creatie en ontwerp', categoryId: 3 },
    { id: 15, name: 'Land- en tuinbouw', categoryId: 3 },
    { id: 16, name: 'Lichaamsverzorging', categoryId: 3 },
    { id: 17, name: 'Onderwijs en pedagogie', categoryId: 3 },
    { id: 18, name: 'Recht, politiek en sociologie', categoryId: 3 },
    { id: 19, name: 'Taal, cultuur en religie', categoryId: 3 },
    { id: 20, name: 'Toerisme, recreatie en sport', categoryId: 3 },
    { id: 21, name: 'Transport en logistiek', categoryId: 3 },
    { id: 22, name: 'Voeding en horeca', categoryId: 3 },
    { id: 23, name: 'Voertuig- en vliegtuigtechniek', categoryId: 3 },
    { id: 24, name: 'Wetenschappen en informatica', categoryId: 3 },

    { id: 25, name: 'Professionele bachelor', categoryId: 4 },
    { id: 26, name: 'Ba-na-Ba', categoryId: 4 },
    { id: 27, name: 'Academische bachelor', categoryId: 4 },

    { id: 28, name: 'Basis Master', categoryId: 5 },
    { id: 29, name: 'Ma-na-Ma', categoryId: 5 },
    { id: 30, name: 'Doctoraat', categoryId: 5 },
    
  ];
  thirdSelectOptions = [
    { id: 1, name: 'Bouw en hout', categoryId: 2 },
    { id: 2, name: 'Dierengezondheid', categoryId: 2 },
    { id: 3, name: 'Economie en organisatie', categoryId: 2 },
    { id: 4, name: 'Elektromechanica en energie', categoryId: 2 },
    { id: 5, name: 'Gezondheid en welzijn', categoryId: 2 },
    { id: 6, name: 'Kunst, creatie en ontwerp', categoryId: 2 },
    { id: 7, name: 'Land- en tuinbouw', categoryId: 2 },
    { id: 8, name: 'Lichaamsverzorging', categoryId: 2 },
    { id: 9, name: 'Maritieme opleidingen', categoryId: 2 },
    { id: 10, name: 'Toerisme, recreatie en sport', categoryId: 2 },
    { id: 11, name: 'Transport en logistiek', categoryId: 2 },
    { id: 12, name: 'Veiligheid en defensie', categoryId: 2 },
    { id: 13, name: 'Voeding en horeca', categoryId: 2 },
    { id: 14, name: 'Voertuig- en vliegtuigtechniek', categoryId: 2 },
    { id: 15, name: 'Wetenschappen en informatica', categoryId: 2 },

    { id: 16, name: 'Bouw en hout', categoryId: 3 },
    { id: 17, name: 'Dierengezondheid', categoryId: 3 },
    { id: 18, name: 'Economie en organisatie', categoryId: 3 },
    { id: 19, name: 'Elektromechanica en energie', categoryId: 3 },
    { id: 20, name: 'Gezondheid en welzijn', categoryId: 3 },
    { id: 21, name: 'Kunst, creatie en ontwerp', categoryId: 3 },
    { id: 22, name: 'Land- en tuinbouw', categoryId: 3 },
    { id: 23, name: 'Lichaamsverzorging', categoryId: 3 },
    { id: 24, name: 'Maritieme opleidingen', categoryId: 3 },
    { id: 25, name: 'Toerisme, recreatie en sport', categoryId: 3 },
    { id: 26, name: 'Transport en logistiek', categoryId: 3 },
    { id: 27, name: 'Voeding en horeca', categoryId: 3 },
    { id: 28, name: 'Voertuig- en vliegtuigtechniek', categoryId: 3 },
    { id: 29, name: 'Wetenschappen en informatica', categoryId: 3 },

    { id: 30, name: 'Opleidingsvorm 1 (OV1)', categoryId: 4 },
    { id: 31, name: 'Opleidingsvorm 2 (OV2)', categoryId: 4 },
    { id: 32, name: 'Opleidingsvorm 3 (OV3)', categoryId: 4 },
    { id: 33, name: 'Alternerende beroepsopleiding (ABO)', categoryId: 4 },

    { id: 34, name: '2de graad', categoryId: 5 },
    { id: 35, name: '3de graad - 6 jaar', categoryId: 5 },
    { id: 36, name: '3de graad - 7 jaar', categoryId: 5 },

    { id: 37, name: '2de graad', categoryId: 6 },
    { id: 38, name: '3de graad - 6 jaar', categoryId: 6 },
    { id: 39, name: '3de graad - 7 jaar', categoryId: 6 },
    
    { id: 40, name: '2de graad', categoryId: 7 },
    { id: 41, name: '3de graad - 6 jaar', categoryId: 7 },
    { id: 42, name: '3de graad - 7 jaar', categoryId: 7 },
    
    { id: 43, name: '2de graad', categoryId: 8 },
    { id: 44, name: '3de graad - 6 jaar', categoryId: 8 },
    { id: 45, name: '3de graad - 7 jaar', categoryId: 8 },

    
    
    
    { id: 46, name: 'Bouw en hout', categoryId: 28 },
    { id: 47, name: 'Communicatie en informatie', categoryId: 28 },
    { id: 48, name: 'Dierengezondheid', categoryId: 28 },
    { id: 49, name: 'Economie en organisatie', categoryId: 28 },
    { id: 50, name: 'Elektromechanica en energie', categoryId: 28 },
    { id: 51, name: 'Gezondheid en welzijn', categoryId: 28 },
    { id: 52, name: 'Kunst, creatie en ontwerp', categoryId: 28 },
    { id: 53, name: 'Land- en tuinbouw', categoryId: 28 },
    { id: 54, name: 'Maritieme opleidingen', categoryId: 28 },
    { id: 55, name: 'Onderwijs en pedagogie', categoryId: 28 },
    { id: 56, name: 'Recht, politiek en sociologie', categoryId: 28 },
    { id: 57, name: 'Taal, cultuur en religie', categoryId: 28 },
    { id: 58, name: 'Toerisme, recreatie en sport', categoryId: 28 },
    { id: 59, name: 'Transport en logistiek', categoryId: 28 },
    { id: 60, name: 'Veiligheid en defensie', categoryId: 28 },
    { id: 61, name: 'Voeding en horeca', categoryId: 28 },
    { id: 62, name: 'Wetenschappen en informatica', categoryId: 28 },
    
    { id: 63, name: 'Bouw en hout', categoryId: 29 },
    { id: 64, name: 'Communicatie en informatie', categoryId: 29 },
    { id: 65, name: 'Dierengezondheid', categoryId: 29 },
    { id: 66, name: 'Economie en organisatie', categoryId: 29 },
    { id: 67, name: 'Elektromechanica en energie', categoryId: 29 },
    { id: 68, name: 'Gezondheid en welzijn', categoryId: 29 },
    { id: 69, name: 'Kunst, creatie en ontwerp', categoryId: 29 },
    { id: 70, name: 'Land- en tuinbouw', categoryId: 29 },
    { id: 71, name: 'Maritieme opleidingen', categoryId: 29 },
    { id: 72, name: 'Onderwijs en pedagogie', categoryId: 29 },
    { id: 73, name: 'Recht, politiek en sociologie', categoryId: 29 },
    { id: 74, name: 'Taal, cultuur en religie', categoryId: 29 },
    { id: 75, name: 'Toerisme, recreatie en sport', categoryId: 29 },
    { id: 76, name: 'Transport en logistiek', categoryId: 29 },
    { id: 77, name: 'Veiligheid en defensie', categoryId: 29 },
    { id: 78, name: 'Voeding en horeca', categoryId: 29 },
    { id: 79, name: 'Wetenschappen en informatica', categoryId: 29 },    
  ];
  fourthSelectOptions = [
    { id: 1, name: 'Architectuur en stedenbouw', categoryId: 46 },
    { id: 2, name: 'Bouw', categoryId: 46 },

    { id: 3, name: 'Communicatie', categoryId: 47 },
    { id: 4, name: 'Informatiebeheer', categoryId: 47 },
    { id: 5, name: 'Journalistiek', categoryId: 47 },

    { id: 6, name: 'Diergeneeskunde', categoryId: 48 },

    { id: 7, name: 'Accountancy en fiscaliteit', categoryId: 49 },
    { id: 8, name: 'Bedrijfsmanagement', categoryId: 49 },
    { id: 9, name: 'Economie en toegepaste economie', categoryId: 49 },
    { id: 10, name: 'Financiën en verzekeringen', categoryId: 49 },
    { id: 11, name: 'Human resources', categoryId: 49 },
    { id: 12, name: 'Marketing', categoryId: 49 },
    { id: 13, name: 'Overheidsmanagement', categoryId: 49 },

    { id: 14, name: 'Elektromechanica', categoryId: 50 },
    { id: 15, name: 'Elektrotechniek', categoryId: 50 },
    { id: 16, name: 'Koeling, warmte en energie', categoryId: 50 },
    { id: 17, name: 'Mechanica', categoryId: 50 },
    { id: 18, name: 'Nucleaire technologie', categoryId: 50 },

    { id: 19, name: 'Biomedische technologie', categoryId: 51 },
    { id: 20, name: 'Ergotherapie', categoryId: 51 },
    { id: 21, name: 'Farmaceutische wetenschappen', categoryId: 51 },
    { id: 22, name: 'Geneeskunde', categoryId: 51 },
    { id: 23, name: 'Gezondheids- en zorgmanagement', categoryId: 51 },
    { id: 24, name: 'Kinesitherapie en bewegingswetenschappen', categoryId: 51 },
    { id: 25, name: 'Logopedie en audiologie', categoryId: 51 },
    { id: 26, name: 'Ouderenzorg', categoryId: 51 },
    { id: 27, name: 'Psychologie', categoryId: 51 },
    { id: 28, name: 'Sociaal werk', categoryId: 51 },
    { id: 29, name: 'Tand- en mondzorg', categoryId: 51 },
    { id: 30, name: 'Verpleegkunde', categoryId: 51 },
    { id: 31, name: 'Voedings- en dieetleer', categoryId: 51 },

    { id: 32, name: 'Audiovisuele technieken', categoryId: 52 },
    { id: 33, name: 'Beeldende kunsten', categoryId: 52 },
    { id: 34, name: 'Fotografie', categoryId: 52 },
    { id: 35, name: 'Grafische technieken', categoryId: 52 },
    { id: 36, name: 'Interieurontwerp- en vormgeving', categoryId: 52 },
    { id: 37, name: 'Juwelen', categoryId: 52 },
    { id: 38, name: 'Mode', categoryId: 52 },
    { id: 39, name: 'Muziek en podiumkunsten', categoryId: 52 },
    { id: 40, name: 'Productontwikkeling', categoryId: 52 },
    { id: 41, name: 'Restauratie, conservatie en monumentenzorg', categoryId: 52 },
    { id: 42, name: 'Textiel', categoryId: 52 },

    { id: 43, name: 'Landbouw', categoryId: 53 },
    { id: 44, name: 'Tuinbouw', categoryId: 53 },

    { id: 45, name: 'Scheepstechniek', categoryId: 54 },
    { id: 46, name: 'Scheepvaart', categoryId: 54 },
    { id: 47, name: 'Zeevisserij', categoryId: 54 },

    { id: 48, name: 'Pedagogie', categoryId: 55 },
    { id: 49, name: 'Secundair onderwijs', categoryId: 55 },

    { id: 50, name: 'Criminologie', categoryId: 56 },
    { id: 51, name: 'Politieke wetenschappen', categoryId: 56 },
    { id: 52, name: 'Rechten', categoryId: 56 },
    { id: 53, name: 'Sociale wetenschappen', categoryId: 56 },

    { id: 54, name: 'Archeologie', categoryId: 57 },
    { id: 55, name: 'Cultuurwetenschappen', categoryId: 57 },
    { id: 56, name: 'Geschiedenis', categoryId: 57 },
    { id: 57, name: 'Godsdienstwetenschappen', categoryId: 57 },
    { id: 58, name: 'Kunstwetenschappen', categoryId: 57 },
    { id: 59, name: 'Taal- en letterkunde', categoryId: 57 },
    { id: 60, name: 'Wijsbegeerte en moraalwetenschappen', categoryId: 57 },

    { id: 61, name: 'Sport en vrije tijd', categoryId: 58 },
    { id: 62, name: 'Toerisme en recreatie', categoryId: 58 },

    { id: 63, name: 'Logistiek', categoryId: 59 },
    { id: 64, name: 'Verkeerskunde', categoryId: 59 },

    { id: 65, name: 'Gezondheid en arbeidsveiligheid', categoryId: 60 },
    { id: 66, name: 'Militaire opleidingen', categoryId: 60 },

    { id: 67, name: 'Voedingsindustrie', categoryId: 61 },

    { id: 68, name: 'Aardwetenschappen', categoryId: 62 },
    { id: 69, name: 'Biochemie', categoryId: 62 },
    { id: 70, name: 'Biologie', categoryId: 62 },
    { id: 71, name: 'Biowetenschappen', categoryId: 62 },
    { id: 72, name: 'Chemie', categoryId: 62 },
    { id: 73, name: 'Fysica en sterrenkunde', categoryId: 62 },
    { id: 74, name: 'Informatica', categoryId: 62 },
    { id: 75, name: 'Materiaalkunde', categoryId: 62 },
    { id: 76, name: 'Milieuwetenschappen', categoryId: 62 },
    { id: 77, name: 'Wiskunde en statistiek', categoryId: 62 },


  ];
  
  filteredSecondSelectOptions: { id: number, name: string }[] = [];
  filteredThirdSelectOptions: { id: number, name: string }[] = [];
  filteredFourthSelectOptions: { id: number, name: string }[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      selectedOption1: [],  
      selectedOption2: [],   
      selectedOption3: [],
      selectedOption4: [],
      finalField: []
    });

    
    this.myForm.get('selectedOption1')?.valueChanges.subscribe((value) => {
      this.showSecondSelect = false;
      this.showFinalField = false;
      this.filteredSecondSelectOptions = [];
      this.myForm.get('selectedOption2')?.reset();  
      this.showThirdSelect = false; 
      this.filteredThirdSelectOptions = [];
      this.myForm.get('selectedOption3')?.reset();  
      if (value) {
        this.showSecondSelect = true;  
        this.filteredSecondSelectOptions = this.secondSelectOptions.filter(
          option => option.categoryId === parseInt(value, 10)
        );
      }
    });

    this.myForm.get('selectedOption2')?.valueChanges.subscribe((value) => {
      this.showThirdSelect = false;
      this.showFinalField = false;
      this.filteredThirdSelectOptions = [];
      this.myForm.get('selectedOption3')?.reset();  
      if (value) {
        this.showThirdSelect = true;  
        this.filteredThirdSelectOptions = this.thirdSelectOptions.filter(
          option => option.categoryId === parseInt(value, 10)
        );
      }
    });
    
    this.myForm.get('selectedOption3')?.valueChanges.subscribe((value) => {
      this.showFourthSelect = false;
      this.showFinalField = false;
      this.filteredFourthSelectOptions = [];
      this.myForm.get('selectedOption4')?.reset();
      if (value) {
        this.showFourthSelect = true;
        this.filteredFourthSelectOptions = this.fourthSelectOptions.filter(
          option => option.categoryId === parseInt(value, 10)
        );
      }
    });
    
    this.myForm.get('selectedOption4')?.valueChanges.subscribe((value) => {
      this.showFinalField = false;
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.myForm.value);
    this.showFinalField = true;
  }
}
