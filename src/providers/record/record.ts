import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecordProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RecordProvider Provider');
  }

  
  }
