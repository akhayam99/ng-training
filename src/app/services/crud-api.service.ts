import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({ providedIn: 'root' })
export class CrudApiService<T> {

  endpoint = ''
  client = inject(HttpClient)

  getList$(): Observable<T[]> {
    return this.client.get<T[]>(`${environment.apiUrl}/${this.endpoint}`)
  }

  getItem$(id: string): Observable<T[]> {
    return this.client.get<T[]>(`${environment.apiUrl}/${this.endpoint}/${id}`)
  }

  delete$(id: string): void {
    this.client.delete<T[]>(`${environment.apiUrl}/${this.endpoint}/${id}`).subscribe()
  }

  create$(id: string, data: T): void {
    this.client.post(`${environment.apiUrl}/${this.endpoint}/${id}`, data)
  }

  update$(id: string, data: T): void {
    this.client.put(`${environment.apiUrl}/${this.endpoint}/${id}`, data)
  }

}
