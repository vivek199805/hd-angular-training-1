import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let loginData = localStorage.getItem('name');
    console.log(loginData);
    
  if (loginData == null) {
    localStorage.clear();
  router.navigate(['/login']);
  return false;
  }
 return true;

};
