import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterModalService {

  filterOpen$ = new BehaviorSubject<boolean>(false);

  openFilter() {
    this.filterOpen$.next(true);
  }

  closeFilter() {
    this.filterOpen$.next(false);
  }
}
