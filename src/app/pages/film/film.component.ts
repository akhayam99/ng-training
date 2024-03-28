import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FilmListComponent } from './components/list/list.component';
import { FilmStateService } from './service/state.service';

@Component({
  selector: 'ngt-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FilmListComponent],
  providers: [FilmStateService]
})
export class FilmComponent implements OnInit {

  title = 'List of Films'
  service = inject(FilmStateService)

  ngOnInit(): void {
    this.service.loadList()
  }

  deleteItem(id: string): void {
    this.service.deleteItem(id)
  }

}
