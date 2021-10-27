import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spin-button',
  template: ` <button
    [disabled]="showLoader"
    class="btn btn-primary"
    type="button"
    (click)="clicked()"
  >
    <div
      *ngIf="showLoader"
      class="spinner-border"
      role="status"
      style="height: 20px;width: 20px;"
    >
      <span class="visually-hidden"></span>
    </div>
    {{ label }}
  </button>`,
})
export class SpinnerButtonComponent implements OnInit {
  @Input() label!: string;
  @Output() onClicked: EventEmitter<null> = new EventEmitter();
  @Input() showLoader: boolean = false;
  constructor() {
    console.log('spin button label:', this.label);
  }

  ngOnInit(): void {
    console.log('spin button label:', this.label);
  }

  clicked() {
    this.onClicked.emit();
  }
}
