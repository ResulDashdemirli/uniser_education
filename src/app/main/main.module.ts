import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { UniDilComponent } from './uni-dil/uni-dil.component';
import { FormsModule } from '@angular/forms';
import { UniAppComponent } from './uni-app/uni-app.component';
import { BlogComponent } from './blog/blog.component';
import { Projects1Component } from './projects1/projects1.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    UniDilComponent,
    UniAppComponent,
    BlogComponent,
    Projects1Component,
    NewsComponent,
    ContactComponent
  ],
  imports: [
  CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
