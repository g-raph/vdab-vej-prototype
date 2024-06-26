import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shell/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink, FooterComponent, NgIf],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent {
  jobs: any[];
  jobId: any;
  job: any;

  @ViewChild('topinfo', {static: false}) private topinfo: ElementRef<HTMLDivElement> = {} as ElementRef;
  scrollPosLow = true;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.topinfo){
      const rect = this.topinfo.nativeElement.getBoundingClientRect();
      const bottomShown = rect.bottom <= 0;
      this.scrollPosLow = !bottomShown;
    }
  }

  constructor(private api: ApiService, private router: ActivatedRoute) {
    this.jobs = this.api.getJobs();
    this.jobId = this.router.snapshot.params['id'];
    this.job = this.api.getJob(parseInt(this.jobId));
  }

  ngOnInit() {
    console.log(this.job);
  }



}
