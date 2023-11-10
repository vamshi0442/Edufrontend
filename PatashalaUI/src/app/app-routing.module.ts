import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecordedVideosComponent  } from './recorded-videos/recorded-videos.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { CmaComponent  } from './cma/cma.component';
import { CaComponent  } from './ca/ca.component';
import { AccaComponent } from './acca/acca.component'; 
import { CimaComponent } from './cima/cima.component';
import { CpaComponent } from './cpa/cpa.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'recordedvideos', component:RecordedVideosComponent},
  {path:'newsandevents', component:NewsAndEventsComponent},
  {path:'cma', component:CmaComponent},
  {path:'ca', component:CaComponent},
  {path:'acca', component:AccaComponent},
  {path:'cima', component:CimaComponent},
  {path:'cpa', component:CpaComponent},
  {path:'ourteam', component:OurTeamComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  imports : [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
