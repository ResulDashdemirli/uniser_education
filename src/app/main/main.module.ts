import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
  CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
