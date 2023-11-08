import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddmisionComponent } from './components/addmision/addmision.component';
import { NoticeComponent } from './components/notice/notice.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'addmision',component:AddmisionComponent},
  {path:'notice',component:NoticeComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
