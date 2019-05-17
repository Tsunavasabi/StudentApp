import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogserviceProvider {
  private url: string = "https://paetong.000webhostapp.com/login1.php";
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
