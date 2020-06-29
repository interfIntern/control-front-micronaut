import { Component, OnInit, ViewChild } from '@angular/core';
import { AmbientesVersionesService } from 'src/app/services/ambientes-versiones.service';
import { AmbienteVersion } from './ambiente-version';
import { AddEditAmbienteVersionComponent } from './add-edit-ambiente-version/add-edit-ambiente-version.component';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/format.datepicker';

@Component({
  selector: 'app-ambientes-versiones',
  templateUrl: './ambientes-versiones.component.html',
  styleUrls: ['../../../app.component.scss','./ambientes-versiones.component.scss'],
  providers: [
    AmbientesVersionesService,
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class AmbientesVersionesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'ambiente','version', 'desde', 'hasta', 'actions'];
  rows: MatTableDataSource<AmbienteVersion> = new MatTableDataSource([]);
  registroAdd: AmbienteVersion;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: AmbientesVersionesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => {
        this.rows.data = results;
      });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditAmbienteVersionComponent, {
      width: '600px',
      data: new AmbienteVersion()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: AmbienteVersion) {
    const dialogRef = this.dialog.open(AddEditAmbienteVersionComponent, {
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  deleteItem(id: number) {
    let executeService = this.apiService.delete(id);
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.componentInstance.dataService = executeService;

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  private refreshComponents(result: number = null) {
    if (result == 1) {
      setTimeout(() => {
        this.getAll();
        this.refreshTable();
      }, 500);
    }
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
