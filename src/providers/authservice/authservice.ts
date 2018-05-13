import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthserviceProvider {
  user: any;
  User: any;
  constructor(public http: HttpClient, public storage: Storage) {

  }


}
