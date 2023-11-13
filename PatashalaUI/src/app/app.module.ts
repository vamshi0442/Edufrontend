import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { RecordedVideosComponent } from './recorded-videos/recorded-videos.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CmaComponent } from './cma/cma.component';
import { CaComponent } from './ca/ca.component';
import { AccaComponent } from './acca/acca.component';
import { CimaComponent } from './cima/cima.component';
import { CpaComponent } from './cpa/cpa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NewsAndEventsComponent,
    RecordedVideosComponent,
    OurTeamComponent,
    CmaComponent,
    CaComponent,
    AccaComponent,
    CimaComponent,
    CpaComponent
  ],
  imports: [
    BrowserModule
  , AppRoutingModule
  , CarouselModule
  , HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
