import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit, OnChanges, DoCheck, 
AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  name: string | any;

  @Input()
  parentColor: string | any;

  @Input()
  parentproduct: Product | any;

  @ViewChild('head') childHeading: ElementRef | any;

  @ContentChild('parentButton')
  parentButton: ElementRef | any;

  childColor: string | any;
  // @ViewChild('para') para: ElementRef | any;

  constructor(private formBuilder: FormBuilder) {
    // this.name = 'vihaan';
    console.log('constrcutor called..');
    //     this.childHeading.nativeElement.style.color = this.parentColor;
    // this.parentButton.nativeElement.style.color = this.parentColor;
  }

  ngOnInit(): void {
    // this.name = 'vihaan';
    console.log('ngOnInit called..');
    // this.para.nativeElement.style.color = this.parentColor;
    // this.childColor = this.parentColor;
    // this.childHeading.nativeElement.style.color = this.parentColor;
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnChanges called..');
    this.childColor = this.parentColor;
    this.name = this.parentColor;
    // console.log(simpleChanges);
    //this.childHeading.nativeElement.style.color = this.parentColor;
    // this.parentButton.nativeElement.style.color = this.parentColor;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called..');
    // console.log(this.parentproduct);
    // this.childHeading.nativeElement.style.color = this.parentColor;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called..');
    this.childHeading.nativeElement.style.color = this.parentColor;
    // this.parentButton.nativeElement.style.color = this.parentColor;
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called..');
    this.childHeading.nativeElement.style.color = this.parentColor;
    // this.parentButton.nativeElement.style.color = this.parentColor;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called..');
    this.parentButton.nativeElement.style.color = this.parentColor;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called..');
    this.parentButton.nativeElement.style.color = this.parentColor;
  }
}
