import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookticketComponent } from './components/bookticket/bookticket.component';

import { CustomMaterialModule } from './custom-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


import { MatStepperModule } from '@angular/material/stepper';




@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent,BookticketComponent], // Include LoginComponent only once
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
