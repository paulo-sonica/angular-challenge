import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);
  #apiUrl = environment.api;

  // @TODO: [GET] 
  
  getUsers(): Observable<User[]> {
    return this.#http.get<User[]>(`${this.#apiUrl}/users`);
  }

}
