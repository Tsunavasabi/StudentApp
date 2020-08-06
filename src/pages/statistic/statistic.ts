import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SelectserviceProvider } from '../../providers/selectservice/selectservice';

@IonicPage()
@Component({
  selector: 'page-statistic',
  templateUrl: 'statistic.html',
})
export class StatisticPage {
  p1: any; p2: any; p3: any; p4: any;
  p5: any; p6: any; p7: any; p8: any;
  p9: any; p10: any; p11: any; p12: any;
  p13: any; Detail: any;
  p1per: any; p2per: any; p3per: any;
  p4per: any; p12per: any; p13per: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public selectService: SelectserviceProvider) {
      this.Detail = this.navParams.get('select')
      console.log(this.Detail)
      this.selectPoint1();
    this.selectPoint2();
    this.selectPoint3();
    this.selectPoint4();
    this.selectPoint5();
    this.selectPoint6();
    this.selectPoint7();
    this.selectPoint8();
    this.selectPoint9();
    this.selectPoint10();
    this.selectPoint11();
    this.selectPoint12();
    this.selectPoint13();
      
  }

  selectPoint1() {
    this.selectService.selectPoint1(this.Detail.std_ID)
    .then(point => {
      this.p1 = point;
    });
  }

  selectPoint2() {
    this.selectService.selectPoint2(this.Detail.std_ID)
    .then(point => {
      this.p2 = point;
    });
  }

  selectPoint3() {
    this.selectService.selectPoint3(this.Detail.std_ID)
    .then(point => {
      this.p3 = point;
    });
  }

  selectPoint4() {
    this.selectService.selectPoint12(this.Detail.std_ID)
    .then(point => {
      this.p4 = point;
    });
  }

  selectPoint5() {
    this.selectService.selectPoint4(this.Detail.std_ID)
    .then(point => {
      this.p5 = point;
    });
  }

  selectPoint6() {
    this.selectService.selectPoint5(this.Detail.std_ID)
    .then(point => {
      this.p6 = point;
    });
  }

  selectPoint7() {
    this.selectService.selectPoint6(this.Detail.std_ID)
    .then(point => {
      this.p7 = point;
    });
  }

  selectPoint8() {
    this.selectService.selectPoint7(this.Detail.std_ID)
    .then(point => {
      this.p8 = point;
    });
  }

  selectPoint9() {
    this.selectService.selectPoint8(this.Detail.std_ID)
    .then(point => {
      this.p9 = point;
    });
  }

  selectPoint10() {
    this.selectService.selectPoint9(this.Detail.std_ID)
    .then(point => {
      this.p10 = point;
    });
  }

  selectPoint11() {
    this.selectService.selectPoint10(this.Detail.std_ID)
    .then(point => {
      this.p11 = point;
    });
  }

  selectPoint12() {
    this.selectService.selectPoint11(this.Detail.std_ID)
    .then(point => {
      this.p12 = point;
    });
  }

  selectPoint13() {
    this.selectService.selectPoint13(this.Detail.std_ID)
    .then(point => {
      this.p13 = point;
    });
  }

}
