import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete-position-dialog',
  templateUrl: './delete-position-dialog.component.html',
  styleUrls: ['./delete-position-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletePositionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
