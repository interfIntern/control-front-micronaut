import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ServersService } from 'src/app/services/servers.service';
import { Server } from './server';
import { AddEditServerComponent } from './add-edit-server/add-edit-server.component';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['../../../app.component.scss'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'procesador', 'volumen', 'so', 'ram', 'ip', 'actions'];
  rows: MatTableDataSource<Server> = new MatTableDataSource([]);
  registroAdd: Server;
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private apiService: ServersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rows.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(results => (this.rows.data = results));
  }

  addNew() {
    const dialogRef = this.dialog.open(AddEditServerComponent, {
      width: '600px',
      data: new Server()
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(row: Server) {
    const dialogRef = this.dialog.open(AddEditServerComponent, {
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
