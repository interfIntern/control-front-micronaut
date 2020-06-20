import { Component, OnInit, Inject } from '@angular/core';
import { Lider } from '../lider';
import { LideresService } from 'src/app/services/lideres.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditFolioComponent } from '../../folios/add-edit-folio/add-edit-folio.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-lider',
  templateUrl: './add-edit-lider.component.html',
  styleUrls: ['./add-edit-lider.component.scss']
})
export class AddEditLiderComponent implements OnInit {
  isEdit: boolean = false;
  data: Lider;

  constructor(public dialogRef: MatDialogRef<AddEditFolioComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Lider,
    public dataService: LideresService
  ) { }

  ngOnInit(): void {
    this.data = new Lider();
    if (this.dataInitial.idLider !== null && this.dataInitial.idLider !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
  
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
    console.log("envia");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    console.log("confirm");
    if (this.isEdit) {
      this.update();
    } else {
      this.add();
    }
    this.dialogRef.close(1);
  }

  public add(): void {
    this.dataService.add(this.data).subscribe();
  }

  public update(): void {
    this.dataService.update(this.data).subscribe();
  }

}
