import { Injectable } from '@angular/core';
import { CrudApiService } from 'src/app/services/crud-api.service';
import { Music } from '../../pages/music/types/Music';

@Injectable({ providedIn: 'root' })

export class MusicDataService extends CrudApiService<Music> {
  override endpoint = 'music'
}
