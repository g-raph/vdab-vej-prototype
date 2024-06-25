import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jobs = [
    {
      title: 'Senior system engineer manager',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Colruyt',
        logo: '/assets/logo1.png',
      },
      id: 1
    },
    {
      title: 'Procurement manager',
      location: {
        office: 'ASAP Office Stabroek',
        city: 'Stabroek',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Aertssen Kranen',
        logo: '/assets/logo2.png',
      },
      id: 2
    },
    {
      title: 'Frontend developer manager',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Select',
        logo: '/assets/logo3.jpg',
      },
      id: 3
    },
    {
      title: 'Backend developer',
      location: {
        office: 'ASAP Office Gent',
        city: 'Herne',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Square City',
        logo: '/assets/logo4.png',
      },
      id: 4
    },
    {
      title: 'Quality Teamleader Colruyt manager',
      location: {
        office: 'ASAP Office Brussel',
        city: 'Brussel',
      },
      summary: 'Als Procurement Manager (m/v/x) geef je leiding aan een team van 4 personen, elk belast met hun eigen portefeuille van leveranciers, samen met ...',
      online: '16 januari 2024',
      type: 'vaste job',
      company: {
        name: 'Adecco Interim',
        logo: '/assets/logo5.png',
      },
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
