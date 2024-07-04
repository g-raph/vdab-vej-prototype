import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input() backIcon = false;

  favorites$ = this.api.getJobs().pipe(
    map(items => items.filter(item => item.saved))
  );
  constructor(private api: ApiService){
  }

}
