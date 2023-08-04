import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-app';
  // counter: number = 1;
  // subscriber : any;

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
  //     }, 1000);
  //   });

  //   this.subscriber = observable.subscribe(od => {
  //     console.log(od);
  //   }); // calling / subscribing observable
  // }

  // ngOnDestroy(): void {
  //   this.subscriber.unsubscribe();
  // }
}
