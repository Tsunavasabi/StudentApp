import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  detail: any;
  name: any;
  act: any;
  clas: any;
  dr: any;
  select: any;
  search: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = this.navParams.get('person')
    this.name = this.detail.name
    this.clas = this.detail.class
    console.log(this.clas)
  }

  

}
