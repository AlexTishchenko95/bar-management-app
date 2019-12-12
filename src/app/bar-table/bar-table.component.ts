import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddPositionDialogComponent} from "../add-position-dialog/add-position-dialog.component";

export interface AcloholPosition {
  type: string
  name: string;
  coast: number;
  rest: number;
}

const ELEMENT_DATA: AcloholPosition[] = [
  {type: 'Пиво', name: 'Лидское барное', coast: 2.50, rest: 22},
  {type: 'Водка', name: 'Сваяк', coast: 12.40, rest: 13},
  {type: 'Виски', name: 'Айриш дай', coast: 76.30, rest: 5},
  {type: 'Ром', name: 'Одноглазый пират', coast: 55.90, rest: 1},
  {type: 'Самогон', name: 'Калечащий', coast: 390.1, rest: 1},
];

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarTableComponent {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['position', 'type', 'name', 'coast', 'rest', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  addPosition() {
    console.log('addPosition');
    const dialogRef = this.dialog.open(AddPositionDialogComponent, {
      width: '1400px',
    });
  }

  onDelete(i) {
    console.log("Delete ", i, " row");
  }

  onEdit(i) {
    console.log("Edit ", i, " row");
  }


}
