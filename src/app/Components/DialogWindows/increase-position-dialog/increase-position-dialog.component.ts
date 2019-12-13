import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-increase-position-dialog',
  templateUrl: './increase-position-dialog.component.html',
  styleUrls: ['./increase-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncreasePositionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
