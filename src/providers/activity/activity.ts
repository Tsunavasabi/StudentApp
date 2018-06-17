import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityProvider {
  private url: string = "http://119.46.21.249/www/activity.php";
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
