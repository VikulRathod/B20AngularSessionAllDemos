import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit, OnDestroy, OnChanges {
  constructor() {
    console.log('second child compoenent contructor called..');
  }

  ngOnInit(): void {
    console.log('second child compoenent ngOnInit called..');
  }

  ngOnDestroy(): void {
    console.log('second child compoenent ngOnDestroy called..');
  }

  ngOnChanges(): void {
    console.log('second child compoenent ngOnChanges called..');
  }
}
