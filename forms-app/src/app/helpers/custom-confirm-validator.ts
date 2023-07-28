import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomConfirmValidator {
  static matchEmails(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.get('email');
      const confirmEmail = control.get('confirmemail');

      if (!email || !confirmEmail) {
        return null;
      }

      return email.value === confirmEmail.value ? null : { emailsNotMatch: true };
    };
  }
}
