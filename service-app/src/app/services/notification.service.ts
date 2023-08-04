import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailRequestBody } from '../models/email-request-body';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  sendEmail(emailBody: EmailRequestBody) {
    return this.http.post('http://113.193.63.106:4050/api/email', emailBody);
    // return this.http.post('http://localhost:56835/api/email', emailBody);
  }
}
