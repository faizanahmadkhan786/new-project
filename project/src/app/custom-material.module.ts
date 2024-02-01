import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  exports: [MatButtonModule, MatInputModule, MatStepperModule,MatTabsModule],
})
export class CustomMaterialModule {}
