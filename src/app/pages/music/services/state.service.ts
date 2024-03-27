import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { MusicDataService } from 'src/app/services/data/music.service';
import { Music } from '../types/Music';

@Injectable()
export class MusicStateService {

  private service = inject(MusicDataService)
  public list$: Observable<Music[]> = of([])
  public loading$: Observable<boolean> = of(false)


  loadList(): void {
    this.loading$ = of(true)
    this.list$ = this.service.getList$().pipe(
      delay(1000),
      tap(() => this.loading$ = of(false))
    )
  }

  deleteItem(id: string | undefined): void {
    if (!id) return

    this.service.delete$(id)
  }

}
