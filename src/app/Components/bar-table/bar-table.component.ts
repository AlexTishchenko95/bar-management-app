import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {ShareDataService} from '../../Services/share-data/share-data.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AddPositionDialogComponent} from '../../DialogWindows/add-position-dialog/add-position-dialog.component';
import {EditPositionDialogComponent} from '../../DialogWindows/edit-position-dialog/edit-position-dialog.component';
import {IncreasePositionDialogComponent} from '../../DialogWindows/increase-position-dialog/increase-position-dialog.component';
import {DecreasePositionDialogComponent} from '../../DialogWindows/decrease-position-dialog/decrease-position-dialog.component';
import {DeletePositionDialogComponent} from '../../DialogWindows/delete-position-dialog/delete-position-dialog.component';
import {HttpReqService} from '../../Services/http-request/http-req.service';

export interface AlcoholPosition {
  type: string;
  name: string;
  volume: number;
  price: number;
  balance: number;
}

let alcoholList: AlcoholPosition[];

@Component({
  selector: 'app-bar-table',
  templateUrl: './bar-table.component.html',
  styleUrls: ['./bar-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarTableComponent implements OnInit, OnDestroy {
  list$: Observable<AlcoholPosition[]> = this.share.dataList$;
  destroy$: Subject<void> = new Subject<void>();

constructor(private dialog: MatDialog, private share: ShareDataService, private httpreq: HttpReqService) { }

  displayedColumns: string[] = ['position', 'type', 'name', 'volume', 'price', 'balance', 'totalVolume', 'add', 'remove', 'edit', 'delete'];

  ngOnInit() {
    this.readAlcoholFileListOnServer();
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WORK WITH SERVER

  readAlcoholFileListOnServer() {
    this.httpreq.requestPost('readFile', 'alcohol-list.json', '')
      .pipe(takeUntil(this.destroy$))
      .subscribe((responseJson: string) => {
        const response = JSON.parse(responseJson);
        this.share.dataList$.next(response);
        alcoholList = response;
      });
  }

  pushAlcoholListOnServer() {
    const alcoholListJson = JSON.stringify(alcoholList);
    this.httpreq.requestPost('updateFile', 'alcohol-list.json', alcoholListJson)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => console.log('status ' + response));
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  addPosition() {
    const dialogRef = this.dialog.open(AddPositionDialogComponent, {
      width: '70%',
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const newAlcoholItem: AlcoholPosition = {...data};
        alcoholList.push(newAlcoholItem);
        this.pushAlcoholListOnServer();
        this.readAlcoholFileListOnServer();
      });
  }

  onIncrease(i) {
    const dialogRef = this.dialog.open(IncreasePositionDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        alcoholList[i].balance = +alcoholList[i].balance + +value.increaseValue;
        this.pushAlcoholListOnServer();
        this.readAlcoholFileListOnServer();
      });
  }

  onDecrease(i) {
    const dialogRef = this.dialog.open(DecreasePositionDialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        alcoholList[i].balance = alcoholList[i].balance - value.increaseValue;
        console.log(alcoholList);
       // this.pushAlcoholListOnServer();
       // this.readAlcoholFileListOnServer();
      });
  }

  onEdit(i) {
    const dialogRef = this.dialog.open(EditPositionDialogComponent, {
      width: '70%',
    });
  }

  onDelete(index) {
    const dialogRef = this.dialog.open(DeletePositionDialogComponent, {
      width: '20%',
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(ok => {
        if (ok) {
          alcoholList.splice(index , 1);
          this.pushAlcoholListOnServer();
          this.readAlcoholFileListOnServer();
        }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
