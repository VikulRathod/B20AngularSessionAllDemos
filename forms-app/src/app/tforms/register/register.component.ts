import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  initialFormData = {
    name: 'vihaan', address: {
      taluka: 'haveli', city: 'pune', state: 'MH'
    }
  };

  register(register: NgForm) {
    alert(`name : ${register.value.name}
    taluka : ${register.value.address.taluka}`);
  }

  clearForm(form: NgForm) {
    // form.reset();
    form.reset(this.initialFormData);
  }
}
