import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Server } from '../server';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-add-edit-server',
  templateUrl: './add-edit-server.component.html',
  styleUrls: ['./add-edit-server.component.scss']
})
export class AddEditServerComponent implements OnInit {

  isEdit: boolean = false;
  data: Server;
  constructor(public dialogRef: MatDialogRef<AddEditServerComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInitial: Server,
    public dataService: ServersService
  ) { }

  ngOnInit(): void {
    this.data = new Server();
    if (this.dataInitial.idServer !== null && this.dataInitial.idServer !== undefined) {
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
