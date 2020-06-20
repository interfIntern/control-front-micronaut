import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  dataService: Observable<Object>;

  constructor(public dialogRef: MatDialogRef<any>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
      this.dataService.subscribe();
  }
}
