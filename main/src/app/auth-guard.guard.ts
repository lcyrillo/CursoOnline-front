import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor (private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const loggedIn = true;

      if (loggedIn) {
        return true;
      }
      this.router.navigate(["/authentication/login"]);
      return false;
    }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean {
      return this.canActivate(next, state);
    }
}
