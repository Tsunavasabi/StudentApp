import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  Hometabs: any;
  Searchtabs: any;
  Requesttabs: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public app: App) {
    this.Hometabs = 'TeachermemberPage';
    this.Searchtabs = 'SearchPage';
    this.Requesttabs = 'RequestPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }


}
