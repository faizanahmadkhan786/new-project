import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AddmisionComponent } from './components/addmision/addmision.component';
import { NavComponent } from './components/nav/nav.component';
import { TestComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TestingComponent } from './components/testing/testing.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        HomeComponent,
        AddmisionComponent,
        NavComponent,
        TestComponent,
        CarouselComponent,
        TestingComponent,
        HorizontalComponent,
        
        
      
       
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
    ]
})
export class AppModule { }
