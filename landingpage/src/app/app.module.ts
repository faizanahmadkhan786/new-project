import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from './components/service/service.component';
import { ImagecapComponent } from './components/imagecap/imagecap.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServiceComponent,
    ImagecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
