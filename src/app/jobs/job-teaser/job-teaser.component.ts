import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-teaser',
  standalone: true,
  imports: [],
  templateUrl: './job-teaser.component.html',
  styleUrl: './job-teaser.component.scss'
})
export class JobTeaserComponent {
  @Input() job: any;

  ngOnInit() {
    // console.log('kaka', this.job);
  }
}
