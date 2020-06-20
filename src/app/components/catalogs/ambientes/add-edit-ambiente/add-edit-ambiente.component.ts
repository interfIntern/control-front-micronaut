import { Component, OnInit, Inject } from '@angular/core';
import { Aplicativo } from '../../aplicativos/aplicativo';
import { Ambiente } from '../ambiente';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { AplicativosService } from 'src/app/services/aplicativos.service';
import { ServersService } from 'src/app/services/servers.service';
import { Server } from '../../servers/server';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-ambiente',
  templateUrl: './add-edit-ambiente.component.html',
  styleUrls: ['./add-edit-ambiente.component.scss']
})
export class AddEditAmbienteComponent implements OnInit {

  servers: Server[] = [];
  aplicativos: Aplicativo[] = [];
  isEdit: boolean = false;
  data: Ambiente;

  constructor(public dialogRef: MatDialogRef<AddEditAmbienteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Ambiente,
    public dataService: AmbientesService,
    public aplicativosService: AplicativosService,
    public serverService: ServersService
  ) { }

  ngOnInit(): void {
    this.data = new Ambiente();
    if (this.dataInitial.idAmbiente !== null && this.dataInitial.idAmbiente !== undefined) {
      this.isEdit = true;
      this.data = Object.assign({}, this.dataInitial);
    }
    this.getServers();
    this.getAplicativos();

  }

  getAplicativos(): void {
    this.aplicativosService.getAll()
      .subscribe(results => (this.aplicativos = results));
  }

  getServers(): void {
    this.serverService.getAll()
      .subscribe(results => (this.servers = results));
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
