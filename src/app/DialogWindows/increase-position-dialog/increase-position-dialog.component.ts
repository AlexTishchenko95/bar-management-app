import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {numericFieldValidator} from "../../Validators/numeric-field-validator";

@Component({
  selector: 'app-increase-position-dialog',
  templateUrl: './increase-position-dialog.component.html',
  styleUrls: ['./increase-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncreasePositionDialogComponent {
  formCreate: FormGroup;

  constructor() {
    this.formCreate = new FormGroup({
      increaseValue: new FormControl('', numericFieldValidator),
    });
  }
}
