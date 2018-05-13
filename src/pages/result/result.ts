import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  result: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  close() {
    this.navCtrl.pop();
  }

}
