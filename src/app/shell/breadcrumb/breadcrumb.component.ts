import { Component } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, AsyncPipe],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs$ = this.breadcrumbService.breadcrumbs;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    // this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    // console.log(this.breadcrumbs)
  }
}
