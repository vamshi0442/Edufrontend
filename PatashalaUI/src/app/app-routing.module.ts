import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RecordedVideosComponent  } from './recorded-videos/recorded-videos.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { CmaComponent  } from './cma/cma.component';
import { CaComponent  } from './ca/ca.component';
import { AccaComponent } from './acca/acca.component'; 
import { CimaComponent } from './cima/cima.component';
import { CmausComponent } from './cmaus/cmaus.component';
import { CpaComponent } from './cpa/cpa.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CsComponent } from './cs/cs.component';
import { CimaUsComponent } from './cima-us/cima-us.component';
import { OnlineLiveClassesComponent } from './online-live-classes/online-live-classes.component';
import { StudyHubVideosComponent } from './study-hub-videos/study-hub-videos.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';
import { ExamnoticeComponent } from './exam-notice/exam-notice.component';
import { CareeroppurtunitiesComponent} from './careeroppurtunities/careeroppurtunities.component';
import { EducationalvideosComponent} from './educationalvideos/educationalvideos.component';
import { CreateeaxmnotificationComponent} from './create-eaxmnotification/create-eaxmnotification.component';
import { ClatComponent} from './clat/clat.component';
import { SlatComponent} from './slat/slat.component';
import { TsicetComponent} from './ts-icet/ts-icet.component';
import { TslawcetComponent} from './ts-lawcet/ts-lawcet.component';
import { IpmatComponent } from './ipmat/ipmat.component';
import { CatComponent} from './cat/cat.component';
import {AiletComponent } from './ailet/ailet.component';
import {LoginComponent} from './login/login.component'
import { PartnersComponent} from './partners/partners.component';
import { coursesofferedComponent} from './courses_offered/courses_offered.component';
// import { } from '';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'ourfaculty', component:FacultyComponent},
  {path:'recordedvideos', component:RecordedVideosComponent},
  {path:'newsandevents', component:NewsAndEventsComponent},
  {path:'cma', component:CmaComponent},
  {path:'cmaus', component:CmausComponent},
  {path:'ca', component:CaComponent},
  {path:'cs', component:CsComponent},
  {path:'acca', component:AccaComponent},
  {path:'cima', component:CimaComponent},
  {path:'cpa', component:CpaComponent},
  {path:'RamMohanKomanduri', component:OurTeamComponent},
  {path:'cima_us', component:CimaUsComponent},
  {path:'online_live_classes', component:OnlineLiveClassesComponent},
  {path:'study_hub_videos', component:StudyHubVideosComponent},
  {path:'vision-mission',component:VisionMissionComponent},
  {path:'createmenu', component:CreatemenuComponent},
  {path:'view-enquiries', component:ViewEnquiriesComponent},
  {path:'', component:HomeComponent},
  {path:'examnotice', component:ExamnoticeComponent},
  {path:'careeroppur', component:CareeroppurtunitiesComponent},
  {path:'VideosByFaculty', component:EducationalvideosComponent},
  {path:'create-eaxmnotification', component:CreateeaxmnotificationComponent},
  {path:'clat', component:ClatComponent},
  {path:'slat', component:SlatComponent},
  {path:'tsicet',component:TsicetComponent},
  {path:'tslawcet',component:TslawcetComponent},
  {path:'ipmat',component:IpmatComponent},
  {path:'cat',component:CatComponent},
  {path:'ailet',component:AiletComponent},
  {path:'login',component:LoginComponent},
  {path:'partners',component:PartnersComponent},
  {path:'courses_offered',component:coursesofferedComponent}
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports : [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })], 
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
