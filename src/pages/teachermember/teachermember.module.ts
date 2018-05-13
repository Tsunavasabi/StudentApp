import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeachermemberPage } from './teachermember';

@NgModule({
  declarations: [
    TeachermemberPage,
  ],
  imports: [
    IonicPageModule.forChild(TeachermemberPage),
  ],
})
export class TeachermemberPageModule {}
