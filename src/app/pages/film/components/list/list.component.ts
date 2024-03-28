import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Film } from '../../types/Film';
import { FilmDetailComponent } from '../detail/detail.component';


@Component({
  selector: 'ngt-film-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    FilmDetailComponent,
  ],
})
export class FilmListComponent {
  @Input() items: Film[] | null = []
  @Input() loading: boolean | null = false

  deleteFilmEvent(id: string): void {
    // console.log('deleteFilmEvent', id)
  }
}
