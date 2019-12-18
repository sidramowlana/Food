import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
    // it should return a observable or a promis or a boolean in this case it returns nly boolean so this is fine
    canActivate(activateRotuerSnapshot:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
        if(this.authService.isAuthenticated())
        {            
            return this.authService.isAuthenticated();
        }
        else
        {
            return this.router.navigate(['/']);
        }
    }
}