import { Component } from '@angular/core';

export interface AcloholElement {
  type: string
  name: string;
  coast: number;
  rest: number;
}

const ELEMENT_DATA: AcloholElement[] = [
  {type: 'Пиво', name: 'Лидское барное', coast: 2.50, rest: 22},
  {type: 'Водка', name: 'Сваяк', coast: 12.40, rest: 13},
  {type: 'Виски', name: 'Айриш дай', coast: 76.30, rest: 5},
  {type: 'Ром', name: 'Одноглазый пират', coast: 55.90, rest: 1},
];

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss']
})
export class BarTableComponent {

  constructor() { }

  displayedColumns: string[] = ['position', 'type', 'name', 'coast', 'rest', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;

  onDelete(i) {
    console.log("Delete ", i, " row");
  }

  onEdit(i) {
    console.log("Edit ", i, " row");
  }

  addPosition() {
    console.log('addPosition');
  }
}
