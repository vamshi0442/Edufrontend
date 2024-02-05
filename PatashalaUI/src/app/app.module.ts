import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';

import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
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
import { CmausComponent } from './cmaus/cmaus.component';
import { CaComponent } from './ca/ca.component';
import { AccaComponent } from './acca/acca.component';
import { CimaComponent } from './cima/cima.component';
import { CpaComponent } from './cpa/cpa.component';
import { CsComponent } from './cs/cs.component';
import { CimaUsComponent } from './cima-us/cima-us.component';
import { StudyHubVideosComponent } from './study-hub-videos/study-hub-videos.component';
import { OnlineLiveClassesComponent } from './online-live-classes/online-live-classes.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { IonicModule } from '@ionic/angular';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';

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
    CmausComponent,
    CaComponent,
    AccaComponent,
    CimaComponent,
    CpaComponent,
    CsComponent,
    CimaUsComponent,
    StudyHubVideosComponent,
    OnlineLiveClassesComponent,
    VisionMissionComponent,
    CreatemenuComponent,
    ViewEnquiriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextareaModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    IonicModule.forRoot({}),
    TableModule,
    ButtonModule,
    MessagesModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
