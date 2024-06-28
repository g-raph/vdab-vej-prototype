import { AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { FooterComponent } from '../../shell/footer/footer.component';
import { FilterModalService } from '../../filter-modal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgForOf, JobTeaserComponent, RouterLink, FooterComponent, NgClass, AsyncPipe],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  jobs = this.api.getJobs();
  filterOpen = this.filterService.filterOpen$;
  constructor(private api: ApiService, private filterService: FilterModalService, private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.scrollToTopPosition();
  }
  
  scrollToTopPosition() {
    setTimeout(() => {
      this.el.nativeElement.querySelector('.jobs-container').scrollIntoView();
    }, 5);
  }

  openFilter() {
    this.filterOpen.next(true);
    document.body.classList.add('filter-open');
  }

  closeFilter() {
    this.filterOpen.next(false);
    document.body.classList.remove('filter-open');
  }
}
