import { Component, OnInit, Inject } from '@angular/core';
import { Folio } from '../../folios/folio';
import { Version } from '../version';
import { VersionesService } from 'src/app/services/versiones.service';
import { Aplicativo } from '../../aplicativos/aplicativo';
import { FoliosService } from 'src/app/services/folios.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AplicativosService } from 'src/app/services/aplicativos.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-version',
  templateUrl: './add-edit-version.component.html',
  styleUrls: ['./add-edit-version.component.css']
})
export class AddEditVersionComponent implements OnInit {

  aplicativos: Aplicativo[] = [];
  folios: Folio[] = [];
  isEdit: boolean = false;
  data: Version;

  constructor(public dialogRef: MatDialogRef<AddEditVersionComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Version,
    public dataService: VersionesService,
    public aplicativosService: AplicativosService,
    public foliosService: FoliosService
  ) { }

  ngOnInit(): void {
    this.data = new Version();
    if (this.dataInitial.idVersion !== null && this.dataInitial.idVersion !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
    this.getAplicativos();
    this.geFolios();
  }

  getAplicativos(): void {
    this.aplicativosService.getAll()
      .subscribe(results => (this.aplicativos = results));
  }

  geFolios(): void {
    this.foliosService.getAll()
      .subscribe(results => (this.folios = results));
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
