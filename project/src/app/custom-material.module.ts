import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  exports: [MatButtonModule, MatInputModule, MatStepperModule,],
})
export class CustomMaterialModule {}
