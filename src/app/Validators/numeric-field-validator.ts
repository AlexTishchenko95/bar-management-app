import {FormControl, ValidationErrors} from "@angular/forms";

export function numericFieldValidator(control: FormControl): ValidationErrors {
  if (control.value === null) return null;
  if (isNaN(control.value)) {
    return { numericValidatorWarning: 'Значение должно быть числом!' };
  }
  return null;
}
