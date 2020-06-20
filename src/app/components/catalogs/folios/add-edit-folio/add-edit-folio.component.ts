import { Component, OnInit, Inject } from '@angular/core';
import { Folio } from '../folio';
import { FoliosService } from 'src/app/services/folios.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AplicativosService } from 'src/app/services/aplicativos.service';
import { Aplicativo } from '../../aplicativos/aplicativo';
import { Lider } from '../../lideres/lider';
import { LideresService } from 'src/app/services/lideres.service';

@Component({
  selector: 'app-add-edit-folio',
  templateUrl: './add-edit-folio.component.html',
  styleUrls: ['./add-edit-folio.component.scss'],
  providers: [AplicativosService, LideresService]
})
export class AddEditFolioComponent implements OnInit {

  aplicativos: Aplicativo[] = [];
  lideres: Lider[] = [];
  isEdit: boolean = false;
  data: Folio;

  constructor(public dialogRef: MatDialogRef<AddEditFolioComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Folio,
    public dataService: FoliosService,
    public aplicativosService: AplicativosService,
    public lideresService: LideresService
  ) { }

  ngOnInit(): void {
    this.data = new Folio();
    if (this.dataInitial.idFolio !== null && this.dataInitial.idFolio !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
    this.getAplicativos();
    this.getLideres();
  }

  getAplicativos(): void {
    this.aplicativosService.getAll()
      .subscribe(results => (this.aplicativos = results));
  }

  getLideres(): void {
    this.lideresService.getAll()
      .subscribe(results => (this.lideres = results));
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
