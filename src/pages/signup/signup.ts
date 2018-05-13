import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public regis: { username: string,
                password: string,
                firstname: string,
                lastname: string,
                email: string,
                classroom: string,
                std_id: number,
                number: number,
                dormitory: string}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  onGoToConfirm() {
      console.log(this.regis)
      this.navCtrl.setRoot(ConfirmPage, {Regisuser: this.regis});
  }
}
