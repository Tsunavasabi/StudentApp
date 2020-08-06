import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { Http } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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
    public http: Http, public alertCtrl: AlertController,
    private transfer: FileTransfer, private file: File) {
    this.Image = this.navParams.get('image')
    this.id = this.navParams.get('id')
    this.flag = this.navParams.get('flag')
    console.log(this.id)
    console.log(this.flag)
    console.log(this.Image)
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
    console.log(this.cropImg)
    this.uploadPic()
  }

  uploadPic() {
    let url = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/profile/uppic.php';
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: this.id+'.jpg',
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: 'image/jpeg',
      headers: {}
      
   }
   let idsend = {id: this.id, flag: this.flag}

   this.http.post('http://www.zp11489.tld.122.155.167.85.no-domain.name/www/delpic.php', JSON.stringify(idsend))
   .subscribe(data => {
     console.log(data)
     fileTransfer.upload(this.cropImg, url, options)
    .then((data) => {
      console.log(data)
      this.http.post('http://www.zp11489.tld.122.155.167.85.no-domain.name/www/fillpath.php', JSON.stringify(idsend))
      .subscribe((data) => {
        console.log(data)
        this.AlertClose()
      })
    }, (err) => {
        console.log(err)
    })
   })


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

  AlertClose() {
    const confirm = this.alertCtrl.create({
      message: 'ทำการเปลี่ยนรูปประจำตัวเสร็จสิ้น',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.popAll()
          }
        }
      ]
    });
    confirm.present();
  }


}
