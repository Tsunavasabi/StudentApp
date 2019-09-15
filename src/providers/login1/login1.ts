import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Login1Provider {
  private url: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/login.php";
  constructor(public http: HttpClient) {
    console.log('Hello Login1Provider Provider');
  }

  getuser() {
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
