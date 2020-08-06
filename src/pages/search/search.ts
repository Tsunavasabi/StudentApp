import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchdata: any;
  datalength: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public http: Http) {
    this.searchdata = this.navParams.get('search');
    this.datalength = this.searchdata.length;
    console.log(this.searchdata);
    console.log(this.datalength);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  presentdetailModal(sear) {
   let profileModal = this.modalCtrl.create('ResultPage', { data: sear });
   profileModal.present();
 }

}
