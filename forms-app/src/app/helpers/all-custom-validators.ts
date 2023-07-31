import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AllCustomValidators {

    static emailPattern(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            // if (control.value.length < 5) {
            //     return { 'propLength': true };
            // }

            const emailRegexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!emailRegexp.test(control.value)) {
                return { 'emailPattern': true };
            }

            return null;
        }
    }

    static compareControl(controlToCompare: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let confirm = control;
            let previous = control.root.get(controlToCompare);

            if (previous?.value !== confirm.value) {
                return { 'comparefailed': true };
            }
            return null;
        };
    }

    static dateRestriction(ageLimit: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const currentDateYear = new Date().getFullYear();
            const dobYear = control.value.getFullYear();

            if((currentDateYear - dobYear) < ageLimit){
                return {'notAllowedAge' : true};
            }

            return null;
        };
    }

}