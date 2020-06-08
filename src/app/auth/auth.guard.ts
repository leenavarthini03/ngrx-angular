import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router,private store: Store<AppState>) {}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(select(isLoggedIn),tap(loggedIn=>{
        if(!loggedIn) this.router.navigateByUrl('./login');
    }))
  }
}