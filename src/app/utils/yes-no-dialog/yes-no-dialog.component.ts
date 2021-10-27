import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogModal } from 'src/app/models/dialog.model';

@Component({
  selector: 'cn-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
})
export class YesNoDialogComponent implements OnInit {
  dialog!: DialogModal;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.dialog);
  }
}
