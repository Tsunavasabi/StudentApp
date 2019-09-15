import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogserviceProvider {
  private url: string = "http://www.zp11489.tld.122.155.167.85.no-domain.name/www/login1.php";
  constructor(public http: Http) {
    console.log('Hello LogserviceProvider Provider');
  }

  Login(datalogin) {
    return new Promise(resolve => {
    this.http.post(this.url, JSON.stringify(datalogin))
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);// Error getting the data
      });
    });
  }


}
