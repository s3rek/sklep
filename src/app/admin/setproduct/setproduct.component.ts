import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BackendService} from 'src/app/services/backend.service'

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {

  toggleField: string;
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  dataSource: MatTableDataSource<any>;
  members: any[];

  lol:string;
  searchFormData:string;
  value:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService) { }

  ngOnInit(): void {
    this.toggleField= "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggle(filter?) {
    if (!filter) { filter = 'searchMode'}
    else { filter = filter;}
    this.toggleField = filter;
  }

    getData() {
      this.dataLoading = true;
      this.querySubscription = this._backendService.getProducts('product')
          .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort
          },
          (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
          },
          () => {this.error = false; this.dataLoading = false;});
    }
// function for data table -result view

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  setData(lol) {}
  getFilterData(searchFormData,value){}
}
