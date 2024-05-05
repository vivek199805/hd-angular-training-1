import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',  pathMatch: 'full', component:SearchComponent,canActivate:[authGuard]},
  {path:'search', component:SearchComponent,canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
