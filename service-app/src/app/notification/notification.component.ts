import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailRequestBody } from '../models/email-request-body';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  emailBody: EmailRequestBody | any;
  message: string | any = 'Email sending not started..';

  constructor(private notification: NotificationService) { }

  sendEmail(emailInfo: NgForm) {
    // console.log(emailInfo.value);
    this.emailBody = new EmailRequestBody();
    this.emailBody.ToEmail = emailInfo.value.email;
    this.emailBody.EmailSubject = emailInfo.value.subject;
    this.emailBody.EmailBody = emailInfo.value.body;
    this.emailBody.IsBodyHtml = true;

    this.notification.sendEmail(this.emailBody).subscribe(data => {
      console.log(data);
      //       this.message = data;
    });
  }
}
