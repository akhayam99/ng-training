import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { Music } from '../../types/Music';
import { MusicDetailComponent } from '../detail/detail.component';


@Component({
  selector: 'ngt-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    MusicDetailComponent,
  ],
})
export class MusicListComponent {
  @Input() items: Music[] | null = []
  @Input() loading: boolean | null = false
}
