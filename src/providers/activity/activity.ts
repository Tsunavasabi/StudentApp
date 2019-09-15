import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityProvider {
  private url: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/activity.php";
  constructor(public http: HttpClient) {
    console.log('Hello ActivityProvider Provider');
  }

  getactid() {
  return new Promise(resolve => {
    this.http.get(this.url)
    .subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
    });
  }
}
