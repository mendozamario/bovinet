import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: [ './alert-modal.component.css' ]
})
export class AlertModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title; message }
  ) {}

  @Input() title;
  @Input() message;

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }
}
