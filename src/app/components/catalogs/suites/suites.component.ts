import { Component, OnInit, ViewChild } from '@angular/core';
import { SuitesService } from 'src/app/services/suites.service';
import { Suite } from './suite';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddSuiteComponent } from './add-suite/add-suite.component';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteComponent } from '../../share/dialogs/delete/delete.component';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['../../../app.component.scss','./suites.component.scss'],
  providers: [SuitesService]
})
export class SuitesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nombre', 'descripcion', 'actions'];
  suites = new MatTableDataSource<Suite>([]);
  suiteAdd: Suite;
  editSuite: Suite; 
  index: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private suitesService: SuitesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.suites.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.suitesService.getAll()
      .subscribe(suites => (this.suites.data = suites));
  }

  addNew() {
    
    const dialogRef = this.dialog.open(AddSuiteComponent, {
      width: '600px',
      data: { suite: this.suiteAdd }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  startEdit(i: number, row: Suite) {
    const dialogRef = this.dialog.open(AddSuiteComponent, {
      width: '600px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshComponents(result);
    });
  }

  deleteItem(id: number) {
    let executeService = this.suitesService.delete(id);
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.componentInstance.dataService=executeService;

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
