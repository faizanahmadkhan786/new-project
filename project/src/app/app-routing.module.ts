import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { registerLocaleData } from '@angular/common';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { PsngerDtlsComponent } from './components/psnger-dtls/psnger-dtls.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'bookticket',component:BookticketComponent},
  {path:'psnger-dtls',component:PsngerDtlsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
