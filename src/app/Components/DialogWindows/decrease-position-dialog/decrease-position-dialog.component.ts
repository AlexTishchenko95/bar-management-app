import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-decrease-position-dialog',
  templateUrl: './decrease-position-dialog.component.html',
  styleUrls: ['./decrease-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecreasePositionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
