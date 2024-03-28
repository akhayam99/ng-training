import { Injectable, inject } from '@angular/core';
import { Observable, delay, map, of, take, tap } from 'rxjs';
import { FilmDataService } from 'src/app/services/data/film.service';
import { Film } from '../types/Film';

@Injectable()
export class FilmStateService {

  private service = inject(FilmDataService)

  public list$: Observable<Film[]> = of([])
  public loading$: Observable<boolean> = of(false)


  loadList(): void {
    this.loading$ = of(true)
    this.list$ = this.service.getList$().pipe(
      delay(1000),
      tap(() => this.loading$ = of(false))
    )
  }

  deleteItem(id: string): void {
    if (!id) return

    this.service.delete$(id).pipe(take(1)).subscribe(() => this.list$.pipe(
      take(1),
      map(list => list.filter(item => item.id !== id)),
      tap(new_list => this.list$ = of(new_list)),
    ).subscribe())
  }

}
