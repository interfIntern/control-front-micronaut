import { Component, OnInit, ViewChild } from '@angular/core';
import { Ambiente } from './ambiente';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { AddEditAmbienteComponent } from './add-edit-ambiente/add-edit-ambiente.component';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['../../../app.component.scss','./ambientes.component.scss'],
  providers: [AmbientesService]
})
export class AmbientesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'server','aplicativo', 'usuario', 'ruta', 'puerto', 'actions'];
  rows: MatTableDataSource<Ambiente> = new MatTableDataSource([]);
  registroAdd: Ambiente;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: AmbientesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditAmbienteComponent, {
      width: '600px',
      data: new Ambiente()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Ambiente) {
    const dialogRef = this.dialog.open(AddEditAmbienteComponent, {
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
