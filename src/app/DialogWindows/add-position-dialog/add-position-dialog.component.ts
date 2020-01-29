import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {numericFieldValidator} from "../../Validators/numeric-field-validator";

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
      volume: new FormControl('', [numericFieldValidator, Validators.required]),
      price: new FormControl('', [numericFieldValidator, Validators.required]),
      balance: new FormControl('', [numericFieldValidator, Validators.required])
    });
  }


}
