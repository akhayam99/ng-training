import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngt-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideogameComponent { }
