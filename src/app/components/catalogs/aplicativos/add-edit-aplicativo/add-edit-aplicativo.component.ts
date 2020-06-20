import { Component, OnInit, Inject } from '@angular/core';
import { Suite } from '../../suites/suite';
import { Aplicativo } from '../aplicativo';
import { SuitesService } from 'src/app/services/suites.service';
import { AplicativosService } from 'src/app/services/aplicativos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-aplicativo',
  templateUrl: './add-edit-aplicativo.component.html',
  styleUrls: ['./add-edit-aplicativo.component.scss']
})
export class AddEditAplicativoComponent implements OnInit {

  suites: Suite[] = [];
  isEdit: boolean = false;
  data: Aplicativo;

  constructor(public dialogRef: MatDialogRef<AddEditAplicativoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Aplicativo,
    public dataService: AplicativosService,
    public suiteService: SuitesService
  ) { }

  ngOnInit(): void {
    this.data = new Aplicativo();
    if (this.dataInitial.idAplicativo !== null && this.dataInitial.idAplicativo !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
    this.getSuites();

  }

  getSuites(): void {
    this.suiteService.getAll()
      .subscribe(results => (this.suites = results));
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
