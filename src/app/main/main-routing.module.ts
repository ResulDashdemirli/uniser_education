import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { UniDilComponent } from './uni-dil/uni-dil.component';
import { UniAppComponent } from './uni-app/uni-app.component';
import { BlogComponent } from './blog/blog.component';
import { Projects1Component } from './projects1/projects1.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'projects1',component:Projects1Component},
  {path:'services',component:ServicesComponent},
  {path:'uni-dil',component:UniDilComponent},
  {path:'uni-app',component:UniAppComponent},
  {path:'blog',component:BlogComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
