import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

function numericFieldValidator(control: FormControl): ValidationErrors {
  if (control.value === null) return null;
  if (isNaN(control.value)) {
    return { numericValidatorWarning: 'Значение должно быть числом!' };
  }
  return null;
}

@Component({
  selector: 'app-add-position-dialog',
  templateUrl: './add-position-dialog.component.html',
  styleUrls: ['./add-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPositionDialogComponent {
  formCreate: FormGroup;

  constructor() {
    this.formCreate = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      volume: new FormControl('', numericFieldValidator),
      price: new FormControl('', numericFieldValidator),
      balance: new FormControl('', numericFieldValidator)
    });
  }


}
