import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PricingComponent } from './pricing/pricing.component';
import { RuteguardService } from './ruteguard.service';
import { SignupComponent } from './signup/signup.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  {path:"",redirectTo:"/Home", pathMatch:"full"},
  {path:"Home",component:HeaderComponent},
  {path:"About",component:IntroComponent},
  {path:"Gallery",component:GalleryComponent},
  {path:"Login",component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"Contactus",component:ContactusComponent},
  {path:"Services",component:ContentComponent},
  {path:"Testimonials",component:TestimonialComponent},
  {path:"Clients",component:ClientsComponent},
  {path:"Pricing",component:PricingComponent},
  {path:"Blog",component:BlogComponent, canActivate:[RuteguardService]},
  {path:"Article/:id",component:ArticleComponent},
  {path:"404",component:NotfoundComponent},
  {path:"**",redirectTo:"/404"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
