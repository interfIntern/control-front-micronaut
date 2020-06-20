import { Component, OnInit, Inject } from '@angular/core';
import { Ambiente } from '../../ambientes/ambiente';
import { Version } from '../../versiones/version';
import { AmbienteVersion } from '../ambiente-version';
import { AmbientesVersionesService } from 'src/app/services/ambientes-versiones.service';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { VersionesService } from 'src/app/services/versiones.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-ambiente-version',
  templateUrl: './add-edit-ambiente-version.component.html',
  styleUrls: ['./add-edit-ambiente-version.component.css']
})
export class AddEditAmbienteVersionComponent implements OnInit {

  ambientes: Ambiente[] = [];
  versiones: Version[] = [];
  isEdit: boolean = false;
  data: AmbienteVersion;

  constructor(public dialogRef: MatDialogRef<AddEditAmbienteVersionComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: AmbienteVersion,
    public dataService: AmbientesVersionesService,
    public ambientesService: AmbientesService,
    public versionesService: VersionesService
  ) { }

  ngOnInit(): void {
    this.data = new AmbienteVersion();
    if (this.dataInitial.idAmbienteVersion !== null && this.dataInitial.idAmbienteVersion !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
    this.getAmbientes();
    this.getVersiones();

  }

  getAmbientes(): void {
    this.ambientesService.getAll()
      .subscribe(results => (this.ambientes = results));
  }

  getVersiones(): void {
    this.versionesService.getAll()
      .subscribe(results => (this.versiones = results));
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
