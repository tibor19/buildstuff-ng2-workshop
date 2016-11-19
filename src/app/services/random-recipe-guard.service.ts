import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class RandomRecipeGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
    let id = route.params['id'] ? +route.params['id'] : Math.floor(1 + Math.random() * 8);
    this.router.navigate(['recipe', id]);
    return false;
  }


}
