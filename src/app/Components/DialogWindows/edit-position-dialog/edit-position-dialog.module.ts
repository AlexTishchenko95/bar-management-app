import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { EditPositionDialogComponent } from './edit-position-dialog.component';

@NgModule({
  declarations: [EditPositionDialogComponent],
  entryComponents: [
    EditPositionDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [EditPositionDialogComponent]
})
export class EditPositionDialogModule { }
