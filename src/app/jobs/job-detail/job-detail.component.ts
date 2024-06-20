import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent {
  jobs: any[];
  jobId: any;
  job: any;

  constructor(private api: ApiService, private router: ActivatedRoute) {
    this.jobs = this.api.getJobs();
    this.jobId = this.router.snapshot.params['id'];
    // this.jobs.map(val => {
    //   if (val.id === this.jobId) {
    //     this.job = val;
    //   }
    // });
    this.job = this.api.getJob(parseInt(this.jobId));
  }

  ngOnInit() {
    console.log(this.job)
  }
}
