import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminDeshboardComponent} from "./admin-deshboard/admin-deshboard.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminDeshboardComponent}
//   // {path: 'confirmation/:token', component: ConfirmationComponent},
//   // {path: 'reset-password/:token', component: ResetPasswordComponent},
//   // {path: 'login', component: LoginComponent},
//   // { path: 'spinner', component: LoadingSpinnerComponent },
//   // {path: 'register', component: RegisterComponent},
//   // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
//   //   children: [
//   //     {path: '', component: DashboardLandingComponent, canActivateChild: [AuthGuard]},
//   //     {path: 'employees', component: DashboardEmployeesComponent, canActivateChild: [AuthGuard]},
//   //     {path: 'projects', component: DashboardProjectsComponent, canActivateChild: [AuthGuard]},
//   //     // {path: 'reports', component: DashboardReportsComponent},
//   //     {path: 'hours', component: HoursComponent, canActivateChild: [AuthGuard]},
//   //     {path: 'edit-profile', component: EditProfileComponent, canActivateChild: [AuthGuard]}
//   //   ]},
//   // {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

