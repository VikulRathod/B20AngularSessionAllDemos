import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnChanges, DoCheck, OnInit, OnDestroy {

  counter: number = 1;
  intervalId: number | any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Third Child ngOnChanges called..');
  }

  ngOnInit(): void {
    console.log('Third Child ngOnInit called..');
    this.intervalId = setInterval(() => {
      console.log(`number : ${this.counter}`);
      this.counter++;
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Third Child ngOnDestroy called..');
    clearInterval(this.intervalId);
  }

  ngDoCheck(): void {
    console.log('Third Child ngDoCheck called..');
  }
}
