import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginProvider {
  private url: string = "http://192.168.1.40/www/local.php";
  constructor(public http: HttpClient) {

  }

  getacttype() {
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
