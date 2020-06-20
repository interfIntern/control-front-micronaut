import { Component, OnInit, ViewChild } from '@angular/core';
import { Lider } from './lider';
import { LideresService } from 'src/app/services/lideres.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';
import { AddEditLiderComponent } from './add-edit-lider/add-edit-lider.component';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['../../../app.component.scss','./lideres.component.scss'],
  providers: [LideresService]
})
export class LideresComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nombre', 'mail', 'telefono', 'ext', 'celular', 'activo', 'actions'];
  rows: MatTableDataSource<Lider> = new MatTableDataSource([]);
  registroAdd: Lider;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: LideresService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditLiderComponent, {
      width: '600px',
      data: new Lider()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Lider) {
    const dialogRef = this.dialog.open(AddEditLiderComponent, {
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
