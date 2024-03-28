import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MusicListComponent } from './components/list/list.component';
import { MusicStateService } from './services/state.service';


@Component({
  selector: 'ngt-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MusicListComponent],
  providers: [MusicStateService]
})
export class MusicComponent implements OnInit {

  title = 'List of Musics'
  service = inject(MusicStateService)

  ngOnInit(): void {
    this.service.loadList()
  }

}
