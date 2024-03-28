import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Film } from '../../types/Film';


@Component({
  selector: 'ngt-film-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LoaderComponent],
})
export class FilmDetailComponent {
  @Input() item!: Film
  @Output() deleteEmitter = new EventEmitter<string>()
}
