import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './main/news/news.component';
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
  {path:'',redirectTo:'/about',pathMatch:'full'},
  {path:'', component:MainComponent,children:[
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
  {path:'projects1',component:Projects1Component},
  {path:'services',component:ServicesComponent},
  {path:'uni-dil',component:UniDilComponent},
  {path:'uni-app',component:UniAppComponent},
  {path:'blog',component:BlogComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
