import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TwilioSendSmsService {

  constructor(private  http: HttpClient) { }

  private apiBaseUrl = 'https://c4impzm660.execute-api.us-west-2.amazonaws.com/default/sendMessages';

  public sendSms(phone, bodyText): Promise<any> {


    const url: string = `${this.apiBaseUrl}/?phone=${phone}&bodyText=${bodyText}`;
    return this.http
      .post(url, "")
      .toPromise();
  }
}

