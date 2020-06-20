import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Suite } from '../suite';
import { SuitesService } from 'src/app/services/suites.service';

@Component({
  selector: 'app-add-suite',
  templateUrl: './add-suite.component.html',
  styleUrls: ['./add-suite.component.scss']
})
export class AddSuiteComponent implements OnInit {

  isEdit: boolean = false;
  data: Suite;
  constructor(public dialogRef: MatDialogRef<AddSuiteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Suite,
    public dataService: SuitesService
  ) { }

  ngOnInit(): void {
    this.data = new Suite();
    if (this.dataInitial.idSuite !== null && this.dataInitial.idSuite !== undefined) {
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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    if (this.isEdit) {
      this.update();
    } else {
      this.add();
    }
  }

  public add(): void {
    this.dataService.add(this.data).subscribe();
  }

  public update(): void {
    this.dataService.update(this.data).subscribe();
  }


}
