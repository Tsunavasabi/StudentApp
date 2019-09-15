import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginProvider {
  private url: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/local.php";
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
