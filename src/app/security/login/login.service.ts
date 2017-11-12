import { Router, NavigationEnd } from '@angular/router';
import { User } from './user.model';
import { API } from '../../app.api';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

@Injectable()
export class LoginService{

  user: User
  lastUrl: string

  constructor(private http: HttpClient, private router: Router){
    this.router.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe( (e: NavigationEnd) => this.lastUrl = e.url)
  }

  handleLogin(path: string = this.lastUrl){
    this.router.navigate(['/login', btoa(path)])
  }
  //saber se o usuário tá logado
  isLoggedIn(): boolean{
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${API}/login`,
              {email: email, password: password})
              .do( user => this.user = user )
  }

  logout(){
    this.user = undefined
  }

}
