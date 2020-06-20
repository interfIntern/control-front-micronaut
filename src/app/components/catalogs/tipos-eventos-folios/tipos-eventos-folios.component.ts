import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposEventosFolios } from './tipos-eventos-folios';
import { MatPaginator } from '@angular/material/paginator';
import { TiposEventosFoliosService } from 'src/app/services/tipos-eventos-folios.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTipoEventoFolioComponent } from './add-edit-tipo-evento-folio/add-edit-tipo-evento-folio.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';

@Component({
  selector: 'app-tipos-eventos-folios',
  templateUrl: './tipos-eventos-folios.component.html',
  styleUrls: ['../../../app.component.scss'],
  providers: [TiposEventosFoliosService]
})
export class TiposEventosFoliosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'descripcion', 'actions'];
  rows: MatTableDataSource<TiposEventosFolios> = new MatTableDataSource([]);
  registroAdd: TiposEventosFolios;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: TiposEventosFoliosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditTipoEventoFolioComponent, {
      width: '600px',
      data: new TiposEventosFolios()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: TiposEventosFolios) {
    const dialogRef = this.dialog.open(AddEditTipoEventoFolioComponent, {
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

  private refreshComponents (result: number = null) {
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
