import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jobs = [
    {
      title: 'Senior system engineer',
      locationOffice: 'ASAP Office Gent',
      locationCity: 'Herne',
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      logo: '/assets/logo1.png',
      id: 1
    },
    {
      title: 'Procurement manager',
      locationOffice: 'ASAP Office Gent',
      locationCity: 'Herne',
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      logo: '/assets/logo2.png',
      id: 2
    },
    {
      title: 'Frontend developer',
      locationOffice: 'ASAP Office Gent',
      locationCity: 'Herne',
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      logo: '/assets/logo3.jpg',
      id: 3
    },
    {
      title: 'Backend developer',
      locationOffice: 'ASAP Office Gent',
      locationCity: 'Herne',
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      logo: '/assets/logo4.png',
      id: 4
    },
    {
      title: 'Quality Teamleader Colruyt manager',
      locationOffice: 'ASAP Office Brussel',
      locationCity: 'Herne',
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      logo: '/assets/logo5.png',
      id: 5
    },
  ];

  constructor() { }

  getJobs(): any[] {
    return this.jobs;
  }

  getJob(id: number) {
    const job = this.jobs.find(item => item.id === id);
    return job;
  }


}
