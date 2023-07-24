import { Component } from "@angular/core";

@Component({
    selector: 'app-index',
    // template: `<h2 style='color:red;'>Index Component Content<h2>`,
    templateUrl: './index.component.html',
    // styles: [`h2{
    //     color:green;
    // }`]
    styleUrls: ['./index.component.css']
})
export class IndexComponent {
    employee: { name: string, gender: string, city: string };
    password: string = '';
    textmode: string = 'password';

    constructor() {
        this.employee = { name: 'Vishal', gender: 'Male', city: 'Pune' };
    }

    details(val: string, val1: string) {
        alert(`Hello, ${val} | ${val1}`);
    }
    changeMode(pwd: string, ele : any) {
        if (pwd === 'password') {
            this.textmode = 'text';
        }
        else {
            this.textmode = 'password';
        }

        console.log(ele);
    }
}