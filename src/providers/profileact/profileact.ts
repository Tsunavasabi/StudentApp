import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileactProvider {
  private url: string = "http://192.168.1.40/www/login.php";
  constructor(public http: HttpClient) {
    console.log('Hello ProfileactProvider Provider');
  }

  getactivity() {
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
