import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailRequestBody } from '../models/email-request-body';
import { NotificationService } from '../services/notification.service';
import { Observable, filter, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  emailBody: EmailRequestBody | any;
  //  message: string | any = 'Email sending not started..';
  message: string | any;
  submitButton: string = 'Send Email';
  inProgress: boolean = false;

  constructor(private notification: NotificationService, private router: Router) { }

  sendEmail(emailInfo: NgForm) {
    // console.log(emailInfo.value);
    this.submitButton = 'Sending Email..';
    this.inProgress = true;
    this.emailBody = new EmailRequestBody();
    this.emailBody.ToEmail = emailInfo.value.email;
    this.emailBody.EmailSubject = emailInfo.value.subject;
    this.emailBody.EmailBody = emailInfo.value.body;
    this.emailBody.IsBodyHtml = true;

    this.notification.sendEmail(this.emailBody).subscribe(data => {
      this.message = data;
      this.submitButton = 'Send Email';
      this.inProgress = false;
      this.router.navigate(['flipkart']);
    });

    this.router.navigate(['flipkart']);

  }


  // counter: number = 1;
  // subscriber: any;

  // ngOnInit(): void {

  //   let promise = new Promise(resolve => {
  //     resolve('promise called 1..');
  //     resolve('promise called 2..');
  //     resolve('promise called 3..');
  //   });

  //   // promise.then(pd => {
  //   //   console.log(pd);
  //   // }); // calling / subscribing promise

  //   let observable = new Observable(data => {
  //     // data.next('observable called 1 ..');
  //     // data.next('observable called 2 ..');
  //     // data.next('observable called 3 ..');
  //     setInterval(() => {
  //       data.next(`observable called ${this.counter} ..`);
  //       this.counter++;
  //     }, 1000);
  //   }).pipe(
  //     filter(val => this.counter % 2 == 0),
  //     map(val => (val as string).toUpperCase())
  //   );

  //   this.subscriber = observable.subscribe(od => {
  //     console.log(od);
  //   }); // calling / subscribing observable

  //   // observable.subscribe(od => {
  //   //   console.log(od);
  //   // }); // calling / subscribing observable

  //   // observable.subscribe(od => {
  //   //   console.log(od);
  //   // }); // calling / subscribing observable
}


function complete(error: any): void {
  throw new Error('Function not implemented.');
}
  // ngOnDestroy(): void {
  //   this.subscriber.unsubscribe();
  // }
