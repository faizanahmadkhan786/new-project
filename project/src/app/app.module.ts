import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookticketComponent } from './components/bookticket/bookticket.component';

import { CustomMaterialModule } from './custom-material.module';
import { NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NativeDateAdapter} from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatTabsModule} from '@angular/material/tabs';
import { PrsnldtlsComponent } from './components/prsnldtls/prsnldtls.component';
import { FooterComponent } from './components/footer/footer.component';
// import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent,BookticketComponent,PrsnldtlsComponent,FooterComponent,], // Include LoginComponent only once
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CustomMaterialModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule,
    NgbDropdownModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
