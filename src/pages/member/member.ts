import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RecordPage } from '../record/record';
import { SelectserviceProvider } from '../../providers/selectservice/selectservice';
import { Chart } from 'chart.js';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';

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
  p1: any; p2: any; p3: any; p4: any;
  p5: any; p6: any; p7: any; p8: any;
  p9: any; p10: any; p11: any; p12: any;
  p13: any; p1per: any; p2per: any; p3per: any;
  p4per: any; p12per: any; p13per: any;
  fileToUpload: any
  Image: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public selectService: SelectserviceProvider,
    public http: Http, private camera: Camera) {
      this.Detail = this.navParams.get('detailper');
      console.log(this.Detail)
      this.selectService.humandetail(this.Detail);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.Image = 'data:image/jpeg;base64,' + imageData;
     console.log(imageData)
    }, (err) => {
     // Handle error 
    });
  }

  uploadPic() {
    let url = 'https://paetong.000webhostapp.com/uppic.php';
    let postdata = new FormData();
    postdata.append('file', this.Image)
    postdata.append('ID', this.Detail.std_ID)
    let data:Observable<any> = this.http.post(url, postdata)
    data.subscribe((result) => {
      console.log(result)
    });

  }

  openMenu() {
   this.menuCtrl.open();
  }

  onGoToRecord() {
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord1() {
    this.Detail["select1"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord2() {
    this.Detail["select2"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord3() {
    this.Detail["select3"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord4() {
    this.Detail["select4"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord5() {
    this.Detail["select5"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord6() {
    this.Detail["select6"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord7() {
    this.Detail["select7"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord8() {
    this.Detail["select8"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord9() {
    this.Detail["select9"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord10() {
    this.Detail["select10"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord11() {
    this.Detail["select11"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord12() {
    this.Detail["select12"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }

  onGoToRecord13() {
    this.Detail["select13"] = true;
    this.navCtrl.push(RecordPage, {person: this.Detail});
  }



  ionViewWillEnter() {
    delete this.Detail["select1"]
    delete this.Detail["select2"]
    delete this.Detail["select3"]
    delete this.Detail["select4"]
    delete this.Detail["select5"]
    delete this.Detail["select6"]
    delete this.Detail["select7"]
    delete this.Detail["select8"]
    delete this.Detail["select9"]
    delete this.Detail["select10"]
    delete this.Detail["select11"]
    delete this.Detail["select12"]
    delete this.Detail["select13"]
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
      this.p1per = (this.p1/15)*100
      var percent
      percent = this.p1per.toFixed(0)
      this.p1per = percent
      document.getElementById('myBar').style.width = percent + '%';

    });
  }

  selectPoint2() {
    this.selectService.selectPoint2(this.Detail.std_ID)
    .then(point => {
      this.p2 = point;
      this.p2per = (this.p2/10)*100
      var percent
      percent = this.p2per.toFixed(0)
      this.p2per = percent
      document.getElementById('myBar1').style.width = percent + '%';
    });
  }

  selectPoint3() {
    this.selectService.selectPoint3(this.Detail.std_ID)
    .then(point => {
      this.p3 = point;
      this.p3per = (this.p3/5)*100
      var percent
      percent = this.p3per.toFixed(0)
      this.p3per = percent
      document.getElementById('myBar2').style.width = percent + '%';
    });
  }

  selectPoint4() {
    this.selectService.selectPoint12(this.Detail.std_ID)
    .then(point => {
      this.p4 = point;
      this.p4per = (this.p4/40)*100
      var percent
      percent = this.p4per.toFixed(0)
      this.p4per = percent
      document.getElementById('myBar3').style.width = percent + '%';
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
      this.p12per = (this.p12/1)*100
      var percent
      percent = this.p12per.toFixed(0)
      this.p12per = percent
      document.getElementById('myBar4').style.width = percent + '%';
    });
  }

  selectPoint13() {
    this.selectService.selectPoint13(this.Detail.std_ID)
    .then(point => {
      this.p13 = point;
      this.p13per = (this.p13/90)*100
      var percent
      percent = this.p13per.toFixed(0)
      this.p13per = percent
      document.getElementById('myBar5').style.width = percent + '%';
    });
  }

}
