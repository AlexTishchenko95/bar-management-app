import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {numericFieldValidator} from "../../Validators/numeric-field-validator";

@Component({
  selector: 'app-decrease-position-dialog',
  templateUrl: './decrease-position-dialog.component.html',
  styleUrls: ['./decrease-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecreasePositionDialogComponent {
  formCreate: FormGroup;

  constructor() {
    this.formCreate = new FormGroup({
      decreaseValue: new FormControl('', [numericFieldValidator, Validators.required]),
    });
  }



}
