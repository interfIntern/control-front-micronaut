import { Component, OnInit, ViewChild } from '@angular/core';
import { VersionesService } from 'src/app/services/versiones.service';
import { Version } from './version';
import { AddEditVersionComponent } from './add-edit-version/add-edit-version.component';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-versiones',
  templateUrl: './versiones.component.html',
  styleUrls: ['../../../app.component.scss','./versiones.component.scss'],
  providers: [VersionesService]
})
export class VersionesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'version', 'descripcion', 'resumen', 'aplicativo', 'folio','actions'];
  rows: MatTableDataSource<Version> = new MatTableDataSource([]);
  registroAdd: Version;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: VersionesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditVersionComponent, {
      width: '600px',
      data: new Version()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Version) {
    const dialogRef = this.dialog.open(AddEditVersionComponent, {
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
