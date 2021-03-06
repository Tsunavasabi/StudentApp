import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  searchact(act) {
    let out = { act_type: act}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/searchact.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  searchactdorm(act, dorm) {
    let out = { act_type: act,
                dorm: dorm}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/searchactdorm.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  searchactclass(act, clas) {
    let out = { act_type: act,
                class: clas}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/searchactclass.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }

  searchall(act, clas, dorm) {
    let out = { act_type: act,
                class: clas,
                dorm: dorm}
    return new Promise(resolve => {
    this.http.post("http://www.zp11489.tld.122.155.167.85.no-domain.name/www/search/searchall.php", JSON.stringify(out))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }
}
