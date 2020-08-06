import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  detail: any;
  name: any;
  act: any;
  clas: any;
  dr: any;
  select: any;
  search: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
      this.detail = this.navParams.get('person');
      this.name = this.detail.name;
      this.act = this.detail.act_type;
      this.clas = this.detail.class;
      this.dr = this.detail.dorm;
  }

  radioClicked(id) {
    this.select = id;
  }

  searchstd() {
    if (this.clas == undefined) {
      let sea = {id: this.select,
                 act: this.act,
                 dorm: this.dr}
      return new Promise(resolve => {
        this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/idactdorm.php", JSON.stringify(sea))
          .subscribe(data => {
            resolve(data);
            this.search = JSON.parse(data['_body']);
            this.navCtrl.push('SearchPage', {search: this.search});
          }, err => {
            console.log(err);// Error getting the data
          });
      });
    } else if (this.dr == undefined) {
      let sea = {id: this.select,
                 act: this.act,
                 class: this.clas}
      return new Promise(resolve => {
        this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/idactclass.php", JSON.stringify(sea))
            .subscribe(data => {
              resolve(data);
              this.search = JSON.parse(data['_body']);
              this.navCtrl.push('SearchPage', {search: this.search});
            }, err => {
              console.log(err);// Error getting the data
          });
      });

    } else if (this.clas != undefined && this.dr != undefined) {
      let sea = {id: this.select,
                 act: this.act,
                 class: this.clas,
                 dorm: this.dr}
      return new Promise(resolve => {
        this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/allid.php", JSON.stringify(sea))
            .subscribe(data => {
                resolve(data);
                this.search = JSON.parse(data['_body']);
                this.navCtrl.push('SearchPage', {search: this.search});
            }, err => {
                console.log(err);// Error getting the data
          });
      });
    }
  }

}
