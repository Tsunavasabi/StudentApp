import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonlecturePage } from './personlecture';

@NgModule({
  declarations: [
    PersonlecturePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonlecturePage),
  ],
})
export class PersonlecturePageModule {}
