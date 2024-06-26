import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { FooterComponent } from '../../shell/footer/footer.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgForOf, JobTeaserComponent, RouterLink, FooterComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  jobs = this.api.getJobs();

  constructor(private api: ApiService) {

  }
}
