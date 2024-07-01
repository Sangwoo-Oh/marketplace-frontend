import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);

    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService.isAuthenticated()) return true;
        this.router.navigate(['/sign-in']);
        return false;
    }
}
