import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataExchangeService} from '../data-exchange.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  url = 'http://localhost:8080/backend/api/students/';
  // const studentsID = ["12345678","Mqp","WM0","_dH","lTv","testId","zTa"];
  ids: string[];
  url2 = 'http://localhost:8080/backend/api/students/id/';
  constructor(private _http: HttpClient, private data: DataExchangeService) { }

  ngOnInit(): void {
      // backend call to get list of students ID
     this._http.get<string[]>(this.url).subscribe((data) => this.ids = data );
    }

  ShowMyInfo(id: string) {
    // call to get form
    console.log(id);
    this.data.changeStudentID(id);

    // trun all components off
    this.data.changeACKFlag();
    this.data.changeDataFlag();
    this.data.changeIDsFlag();

    this.data.changeReadOnlyFlag();

    // turn read only on
    // this.url2 = this.url2 + id;
    // console.log('the info for student ' + this.url2);
    // this.url2 = 'http://localhost:8080/backend/api/students/id/';
  }
}
