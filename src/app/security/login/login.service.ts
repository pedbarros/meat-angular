import { User } from './user.model';
import { API } from '../../app.api';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

  user: User

  constructor(private http: HttpClient){}

  isLoggedIn(): boolean{
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${API}/login`,
              {email: email, password: password})
              .do( user => this.user = user )
  }

}
