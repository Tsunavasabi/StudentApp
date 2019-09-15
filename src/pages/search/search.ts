import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ResultPage } from '../result/result';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchdata: any;
  datalength: number;
  ImgSrc = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/profile/'
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.searchdata = this.navParams.get('search');
    this.datalength = this.searchdata.length;
    console.log(this.searchdata);
    console.log(this.datalength);
    this.ImgSrc = this.ImgSrc+this.searchdata.std_ID+'.jpg?'+Math.random()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  presentdetailModal(sear) {
   let profileModal = this.modalCtrl.create(ResultPage, { data: sear });
   profileModal.present();
 }

}
