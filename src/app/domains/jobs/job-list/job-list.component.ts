import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { JobTeaserComponent } from '../job-teaser/job-teaser.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FilterModalService } from '../../../services/filter-modal.service';
import { BottomNavComponent } from "../../../shell/bottom-nav/bottom-nav.component";

export interface bottomNavItem {
  id: number,
  icon: string,
  label: string,
  routerlink?: string,
  hasBadge: boolean
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgForOf, JobTeaserComponent, RouterLink, NgClass, AsyncPipe, NgIf, BottomNavComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  jobs$ = this.api.getJobs();
  filterOpen = this.filterService.filterOpen$;

  navConfig: bottomNavItem[] = [
    {
      id: 1,
      icon: 'search',
      label: 'Jobs',
      routerlink: '/jobs/vind-een-job',
      hasBadge: false
    },
    {
      id: 2,
      icon: 'task',
      label: 'Jobsuggesties',
      hasBadge: false
    },
    {
      id: 3,
      icon: 'notifications',
      label: 'Job alert',
      hasBadge: false
    },
    {
      id: 4,
      icon: 'star',
      label: 'Bewaard',
      routerlink: '/favorites',
      hasBadge: true
    },
  ];

  constructor(private api: ApiService, private filterService: FilterModalService, private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.scrollToTopPosition();
  }
  
  scrollToTopPosition() {
    setTimeout(() => {
      this.el.nativeElement.querySelector('.job-list').scrollIntoView();
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
