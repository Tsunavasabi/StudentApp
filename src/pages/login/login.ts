import { Component } from '@angular/core';
import { MemberPage } from '../member/member'
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  datalist= {username : '',password: ''} ;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

  }

  onGoToMember() {
    this.navCtrl.setRoot(MemberPage);
  }




}
