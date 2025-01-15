import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shell/footer/footer.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FavoriteService } from '../../../favorite.service';
import { Observable } from 'rxjs';
import { bottomNavItem } from '../job-list/job-list.component';
import { BottomNavComponent } from '../../../shell/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, BottomNavComponent],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent {
  jobId: any;
  job$: Observable<any>;

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

  constructor(private api: ApiService, private router: ActivatedRoute, private el: ElementRef) {
    this.jobId = this.router.snapshot.params['id'];
    this.job$ = this.api.getJob(parseInt(this.jobId));
  }

  ngOnInit() {
    setTimeout(() => {
      this.el.nativeElement.querySelector('.job-detail').scrollIntoView();
    }, 5);
  }

  setAsFavorite(job: any) {
    this.api.addFavorite(job);
  }

  scrollToPosition(container: string) {
    this.el.nativeElement.querySelector(container).scrollIntoView({ behavior: "smooth"});
  }

}
