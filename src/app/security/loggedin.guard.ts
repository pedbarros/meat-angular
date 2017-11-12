import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

  constructor(private loginService: LoginService){}

  checkAuthentication(path: string): boolean{
    const loggedIn = this.loginService.isLoggedIn()
    if (!loggedIn){
       this.loginService.handleLogin(`/${path}`)
    }
    return loggedIn
  }

  canLoad(route: Route): boolean{
    console.log('canLoad' + route)
    return this.checkAuthentication(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('canActivate' + activatedRoute)
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }
}
