import { Component, OnInit, ViewChild } from '@angular/core';
import { Aplicativo } from './aplicativo';
import { AplicativosService } from 'src/app/services/aplicativos.service';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAplicativoComponent } from './add-edit-aplicativo/add-edit-aplicativo.component';

@Component({
  selector: 'app-aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['../../../app.component.scss','./aplicativos.component.scss'],
  providers: [AplicativosService]
})
export class AplicativosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'descripcion', 'resumen', 'suite', 'actions'];
  rows: MatTableDataSource<Aplicativo> = new MatTableDataSource([]);
  registroAdd: Aplicativo;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: AplicativosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditAplicativoComponent, {
      width: '600px',
      data: new Aplicativo()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Aplicativo) {
    const dialogRef = this.dialog.open(AddEditAplicativoComponent, {
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
