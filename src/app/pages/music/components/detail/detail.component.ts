import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Music } from '../../types/Music';


@Component({
  selector: 'ngt-music-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LoaderComponent],
})
export class MusicDetailComponent {
  @Input() item!: Music
}
