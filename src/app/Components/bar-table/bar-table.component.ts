import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {ShareDataService} from "../../Services/share-data/share-data.service";
import {Observable, Subject} from "rxjs";
import {takeUntil} from 'rxjs/operators';

import {AddPositionDialogComponent} from "../../DialogWindows/add-position-dialog/add-position-dialog.component";
import {EditPositionDialogComponent} from "../../DialogWindows/edit-position-dialog/edit-position-dialog.component";
import {IncreasePositionDialogComponent} from "../../DialogWindows/increase-position-dialog/increase-position-dialog.component";
import {DecreasePositionDialogComponent} from "../../DialogWindows/decrease-position-dialog/decrease-position-dialog.component";
import {DeletePositionDialogComponent} from "../../DialogWindows/delete-position-dialog/delete-position-dialog.component";
import {HttpReqService} from "../../Services/http-request/http-req.service";

export interface AcloholPosition {
  type: string;
  name: string;
  volume: number;
  price: number;
  balance: number;
}

let ELEMENT_DATA: AcloholPosition[];

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarTableComponent implements OnInit, OnDestroy {
  list$: Observable<AcloholPosition[]> = this.share.dataList$;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private dialog: MatDialog, private share: ShareDataService, private httpreq: HttpReqService) { }

  displayedColumns: string[] = ['position', 'type', 'name', 'volume', 'price', 'balance', 'totalVolume', 'add', 'remove', 'edit', 'delete'];

  ngOnInit() {
    this.readAlcoholFileListOnServer();
  }

  readAlcoholFileListOnServer() {
    this.httpreq.requestPost('readFile', 'alcohol-list.json', '')
      .pipe(takeUntil(this.destroy$))
      .subscribe((responseJson: string) => {
        const response = JSON.parse(responseJson);
        this.share.dataList$.next(response);
        ELEMENT_DATA = response;
      });
  }

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

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
