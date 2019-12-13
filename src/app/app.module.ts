import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HeaderModule} from "./Components/header/header.module";
import {BarTableModule} from "./Components/bar-table/bar-table.module";
import {AddPositionDialogModule} from "./Components/DialogWindows/add-position-dialog/add-position-dialog.module";
import {EditPositionDialogModule} from "./Components/DialogWindows/edit-position-dialog/edit-position-dialog.module";
import {IncreasePositionDialogModule} from "./Components/DialogWindows/increase-position-dialog/increase-position-dialog.module";
import {DecreasePositionDialogModule} from "./Components/DialogWindows/decrease-position-dialog/decrease-position-dialog.module";
import {DeletePositionDialogModule} from "./Components/DialogWindows/delete-position-dialog/delete-position-dialog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    BarTableModule,
    AddPositionDialogModule,
    EditPositionDialogModule,
    IncreasePositionDialogModule,
    DecreasePositionDialogModule,
    DeletePositionDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
