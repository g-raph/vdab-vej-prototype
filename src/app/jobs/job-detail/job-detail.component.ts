import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shell/footer/footer.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { FavoriteService } from '../../favorite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink, FooterComponent, NgIf, AsyncPipe, JsonPipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent {
  jobId: any;
  job$: Observable<any>;

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
