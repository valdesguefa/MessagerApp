import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { Helper } from './helper';
// import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private router: Router, private zone: NgZone) {}

  canActivate(): boolean {
    if (!Helper.isNextStep) {
      // this.zone.run(() => {
      //   this.router.navigate(['/signup']); //you can redirect user to any page here ( Optional )
      // });
      return false; //block navigation
    } else {
      return Helper.isNextStep || true; // allow navigation
    }
  }
}
