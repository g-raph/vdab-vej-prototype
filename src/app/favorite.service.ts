import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites$ = new BehaviorSubject<any[]>([]);

  addFavorite(obj: any) {
    const vacature = {...obj, saved: true};
    this.favorites$.next([...this.favorites$.getValue(), vacature]);
  }

  getFavorites() {
    return this.favorites$;
  }
}
