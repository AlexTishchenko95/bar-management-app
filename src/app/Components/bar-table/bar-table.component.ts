import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {AddPositionDialogComponent} from "../../DialogWindows/add-position-dialog/add-position-dialog.component";
import {EditPositionDialogComponent} from "../../DialogWindows/edit-position-dialog/edit-position-dialog.component";
import {IncreasePositionDialogComponent} from "../../DialogWindows/increase-position-dialog/increase-position-dialog.component";
import {DecreasePositionDialogComponent} from "../../DialogWindows/decrease-position-dialog/decrease-position-dialog.component";
import {DeletePositionDialogComponent} from "../../DialogWindows/delete-position-dialog/delete-position-dialog.component";

export interface AcloholPosition {
  type: string;
  name: string;
  volume: number;
  price: number;
  balance: number;
}

const ELEMENT_DATA: AcloholPosition[] = [
  {type: 'Пиво', name: 'Лидское барное', volume: 0.5, price: 2.50, balance: 22},
  {type: 'Водка', name: 'Сваяк', volume: 0.5, price: 12.40, balance: 13},
  {type: 'Виски', name: 'Айриш дай', volume: 1, price: 76.30, balance: 5},
  {type: 'Ром', name: 'Одноглазый пират', volume: 0.7, price: 55.90, balance: 1},
  {type: 'Самогон', name: 'Калечащий', volume: 2, price: 390.1, balance: 1},
];

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarTableComponent {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['position', 'type', 'name', 'volume', 'price', 'balance', 'totalVolume', 'add', 'remove', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  addPosition() {
    console.log('addPosition');
    const dialogRef = this.dialog.open(AddPositionDialogComponent, {
      width: '70%',
    });
  }

  onIncrease(i) {
    console.log("Add ", i, " row");
    const dialogRef = this.dialog.open(IncreasePositionDialogComponent, {
      width: '30%',
    });
  }

  onDecrease(i) {
    console.log("Remove ", i, " row");
    const dialogRef = this.dialog.open(DecreasePositionDialogComponent, {
      width: '30%',
    });
  }

  onEdit(i) {
    console.log("Edit ", i, " row");
    const dialogRef = this.dialog.open(EditPositionDialogComponent, {
      width: '70%',
    });
  }

  onDelete(i) {
    console.log("Delete ", i, " row");
    const dialogRef = this.dialog.open(DeletePositionDialogComponent, {
      width: '20%',
    });
  }
}
