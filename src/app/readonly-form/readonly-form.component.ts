import { Component, OnInit } from '@angular/core';
import {Student} from '../models/student.model';
import {HttpClient} from '@angular/common/http';
import {DataExchangeService} from '../data-exchange.service';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-readonly-form',
  templateUrl: './readonly-form.component.html',
  styleUrls: ['./readonly-form.component.css']
})
export class ReadonlyFormComponent implements OnInit {

  url = 'http://localhost:8080/backend/api/students/id/';
  student = new Student();
  constructor(private _http: HttpClient, private dataService: DataExchangeService) {
  }

  ngOnInit(): void {
    this.dataService.currentStudentID.subscribe( id => {
      const fullUrl = this.url + id;
      console.log(fullUrl);
      // this._http.get<Student>(fullUrl).subscribe(result => this.student);
      this._http.get<Student>(fullUrl).subscribe((data: Student) => this.student = {
        studentId: (data as any).studentId,
        firstName: (data as any).firstName,
        lastName:  (data as any).lastName,
        phone:  (data as any).phone,
        streetAddress: (data as any).streetAddress,
        unit: (data as any).unit,
        zipcode: (data as any).zipcode,
        url: (data as any).url,
        city: (data as any).city,
        state: (data as any).state,
        liked: (data as any).liked,
        interest: (data as any).interest,
        likelihood: (data as any).likelihood,
        graduationMonth: (data as any).graduationMonth,
        graduationYear: (data as any).graduationYear,
        dateOfVisit: (data as any).dateOfVisit,
        comments: (data as any).comments,
        email: (data as any).email,
        data: (data as any).data,
      });
    });
    // this._http.get<Student>(this.url).subscribe((data: Student) => this.student = {
    //   studentId: (data as any).studentId,
    //   firstName: (data as any).firstName,
    //   lastName:  (data as any).lastName,
    //   phone:  (data as any).phone,
    //   streetAddress: (data as any).streetAddress,
    //   unit: (data as any).unit,
    //   zipcode: (data as any).zipcode,
    //   url: (data as any).url,
    //   city: (data as any).city,
    //   state: (data as any).state,
    //   liked: (data as any).liked,
    //   interest: (data as any).interest,
    //   likelihood: (data as any).likelihood,
    //   graduationMonth: (data as any).graduationMonth,
    //   graduationYear: (data as any).graduationYear,
    //   dateOfVisit: (data as any).dateOfVisit,
    //   comments: (data as any).comments,
    //   email: (data as any).email,
    //   data: (data as any).data,
    // });
  }

}
