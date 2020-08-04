import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-crop',
  templateUrl: 'crop.html',
})
export class CropPage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  Image: string;
  cropImg = null;
  cropperOptions: any;
  id: string;
  flag: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public alertCtrl: AlertController) {
    this.Image = this.navParams.get('image')
    this.id = this.navParams.get('id')
    this.flag = this.navParams.get('flag')
    console.log(this.id)
    console.log(this.flag)
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 1/1,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CropPage');
  }

  reset() {
    this.angularCropper.cropper.reset();
  }
 
  clear() {
    this.angularCropper.cropper.clear();
  }
 
  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.cropImg = croppedImgB64String;
    this.uploadPic()
  }

  uploadPic() {
    let url = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/profile/uppic.php';
    let postdata = new FormData();
    postdata.append('file', this.cropImg)
    postdata.append('ID', this.id)
    postdata.append('flag', this.flag)
    console.log(postdata['file'])
    let data:Observable<any> = this.http.post(url, postdata)
    data.subscribe((result) => {
      console.log(result)
      this.navCtrl.pop()
    });

  }

  AlertUpload() {
    const confirm = this.alertCtrl.create({
      message: 'คุณต้องการเปลี่ยนรูปประจำตัวเป็นรูปภาพนี้ใช่หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.save()
          }
        }
      ]
    });
    confirm.present();
  }

}
