import { Component, OnInit, ViewChild } from '@angular/core';
import { FoliosService } from 'src/app/services/folios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Folio } from './folio';
import { AddEditFolioComponent } from './add-edit-folio/add-edit-folio.component';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';

@Component({
  selector: 'app-folios',
  templateUrl: './folios.component.html',
  styleUrls: ['../../../app.component.scss', './folios.component.scss'],
  providers: [FoliosService]
})
export class FoliosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'foliocq', 'descripcion', 'resumen', 'aplicativo', 'lider', 'actions'];
  rows: MatTableDataSource<Folio> = new MatTableDataSource([]);
  registroAdd: Folio;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: FoliosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditFolioComponent, {
      width: '600px',
      data: new Folio()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Folio) {
    const dialogRef = this.dialog.open(AddEditFolioComponent, {
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
      }, 100);
    }
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
