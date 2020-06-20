import { Component, OnInit, Inject } from '@angular/core';
import { TiposEventosFolios } from '../tipos-eventos-folios';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TiposEventosFoliosService } from 'src/app/services/tipos-eventos-folios.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-tipo-evento-folio',
  templateUrl: './add-edit-tipo-evento-folio.component.html',
  styleUrls: ['./add-edit-tipo-evento-folio.component.scss']
})
export class AddEditTipoEventoFolioComponent implements OnInit {

  isEdit: boolean = false;
  data: TiposEventosFolios;
  constructor(public dialogRef: MatDialogRef<AddEditTipoEventoFolioComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: TiposEventosFolios,
    public dataService: TiposEventosFoliosService
  ) { }

  ngOnInit(): void {
    this.data = new TiposEventosFolios();
    if (this.dataInitial.idTipoEvento !== null && this.dataInitial.idTipoEvento !== undefined) {
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
