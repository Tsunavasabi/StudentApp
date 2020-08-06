import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CropPage } from './crop';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    CropPage,
  ],
  imports: [
    IonicPageModule.forChild(CropPage),
    AngularCropperjsModule
  ],
})
export class CropPageModule {}
