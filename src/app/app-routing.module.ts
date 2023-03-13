import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { Blog1Component } from './main/blog1/blog1.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './main/news/news.component';
import { News1Component } from './main/news1/news1.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { Projects1Component } from './main/projects1/projects1.component';
import { ServicesComponent } from './main/services/services.component';
import { UniAppComponent } from './main/uni-app/uni-app.component';
import { UniDilComponent } from './main/uni-dil/uni-dil.component';


const routes: Routes = [
  // {
  //   path: '', 
  //   loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  // }
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'', component:MainComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'projects1',component:Projects1Component},
  {path:'services',component:ServicesComponent},
  {path:'uni-dil',component:UniDilComponent},
  {path:'uni-app',component:UniAppComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog1',component:Blog1Component},
  {path:'news',component:NewsComponent},
  {path:'news1',component:News1Component},
  {path:'contact',component:ContactComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
