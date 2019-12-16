import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-edit-position-dialog',
  templateUrl: './edit-position-dialog.component.html',
  styleUrls: ['./edit-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPositionDialogComponent {

  constructor() { }

}
