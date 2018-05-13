import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RecordPage } from '../record/record';
import { SelectserviceProvider } from '../../providers/selectservice/selectservice';
import { Chart } from 'chart.js';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  @ViewChild('allCanvas') allCanvas;
  allChart: any;
  public Detail: any;
  allpoint: any;
  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  p6: any;
  p7: any;
  p8: any;
  p9: any;
  p10: any;
  p11: any;
  p12: any;
  p13: any;
  base64Image: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public selectService: SelectserviceProvider,
    private camera: Camera) {
      this.Detail = this.navParams.get('detailper');
      this.selectService.humandetail(this.Detail);
  }

  ionViewDidLoad() {

    this.selectallPoint();
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

  openMenu() {
   this.menuCtrl.open();
  }

  onGoToRecord() {
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });
  }

  ionViewWillEnter() {
    this.selectallPoint();
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

  selectallPoint() {
    this.selectService.selectallPoint(this.Detail.std_ID)
    .then(point => {
      this.allpoint = point;
      this.allChart = new Chart(this.allCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["กิจกรรมที่ทำแล้ว", "กิจกรรมที่เหลือ"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.allpoint, 55-this.allpoint],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(41, 41, 41, 0.5)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ], borderWidth: 1
                }]
            }

        });
    });
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
    this.selectService.selectPoint4(this.Detail.std_ID)
    .then(point => {
      this.p4 = point;
    });
  }

  selectPoint5() {
    this.selectService.selectPoint5(this.Detail.std_ID)
    .then(point => {
      this.p5 = point;
    });
  }

  selectPoint6() {
    this.selectService.selectPoint6(this.Detail.std_ID)
    .then(point => {
      this.p6 = point;
    });
  }

  selectPoint7() {
    this.selectService.selectPoint7(this.Detail.std_ID)
    .then(point => {
      this.p7 = point;
    });
  }

  selectPoint8() {
    this.selectService.selectPoint8(this.Detail.std_ID)
    .then(point => {
      this.p8 = point;
    });
  }

  selectPoint9() {
    this.selectService.selectPoint9(this.Detail.std_ID)
    .then(point => {
      this.p9 = point;
    });
  }

  selectPoint10() {
    this.selectService.selectPoint10(this.Detail.std_ID)
    .then(point => {
      this.p10 = point;
    });
  }

  selectPoint11() {
    this.selectService.selectPoint11(this.Detail.std_ID)
    .then(point => {
      this.p11 = point;
    });
  }

  selectPoint12() {
    this.selectService.selectPoint12(this.Detail.std_ID)
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
