import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerButtonComponent } from '../utils/spinner-button.component';
import { YesNoDialogComponent } from '../utils/yes-no-dialog/yes-no-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerButtonComponent, YesNoDialogComponent],
  exports: [SpinnerButtonComponent, YesNoDialogComponent],
})
export class SharedModule {}
