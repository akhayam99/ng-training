import { Injectable } from '@angular/core';
import { Film } from 'src/app/pages/film/types/Film';
import { CrudApiService } from 'src/app/services/crud-api.service';

@Injectable({ providedIn: 'root' })

export class FilmDataService extends CrudApiService<Film> {
  override endpoint = 'film'
}
