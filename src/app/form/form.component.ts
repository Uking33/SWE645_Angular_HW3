import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {requireCheckboxesToBeCheckedValidator} from 'src/app/require-checkboxes-to-be-checked.validator';
import {RegistrationService} from '../registration.service';
import {Student} from '../models/student.model';
import {DataExchangeService} from '../data-exchange.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Alphabets = '^[a-zA-Z ]+$';
  numeric = '^[0-9]+$';
  alphanumeric = '^[a-zA-Z0-9 ]+$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  profileForm = new FormGroup({
    ID: new FormControl('', [Validators.required, Validators.pattern(this.alphanumeric)]),
    firstName: new FormControl('', [Validators.required, Validators.pattern(this.Alphabets)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(this.Alphabets)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPattern)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl(''),
    DateOfVisit: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', [Validators.pattern(this.alphanumeric)]),
      unit: new FormControl('', [Validators.pattern(this.alphanumeric)]),
      city: new FormControl('', [Validators.pattern(this.Alphabets)]),
      state: new FormControl(''),
      zip: new FormControl('', [Validators.pattern(this.numeric)])
    }),
    G_month: new FormControl(''),
    G_year: new FormControl(''),
    myCheckboxGroup: new FormGroup({
      students: new FormControl(false),
      campus: new FormControl(false),
      atmosphere: new FormControl(false),
      dorms: new FormControl(false),
      location: new FormControl(false),
      activities: new FormControl(false),
      sport: new FormControl(false),
    }, requireCheckboxesToBeCheckedValidator()),
    why: new FormControl('', Validators.required),
    recommendation: new FormControl(''),
    data: new FormControl(''),
    comments: new FormControl(''),

  });

  get ID(): any{
    return this.profileForm.get('ID');
  }
  get firstName(): any{
    return this.profileForm.get('firstName');
  }
  get lastName(): any{
    return this.profileForm.get('lastName');
  }
  get phone(): any{
    return this.profileForm.get('phone');
  }
  get email(): any{
    return this.profileForm.get('email');
  }
  get street(): any{
    return this.profileForm.get('address').get('street');
  }
  get unit(): any{
    return this.profileForm.get('address').get('unit');
  }
  get city(): any{
    return this.profileForm.get('address').get('city');
  }
  get zip(): any{
    return this.profileForm.get('address').get('zip');
  }

  get test(): string{
    return String ( this.profileForm.get('ID'));
  }

  likes_list(): any{
    const p = this.profileForm.get('myCheckboxGroup').value;
    for (const [key, value] of Object.entries(p)) {
      console.log(`${key}: ${value}`);
    }
   }
  onSubmit(): void{
    console.log(this.profileForm.value);
    console.log(this.profileForm.status);
    console.log(this.profileForm.get('myCheckboxGroup').value);

    const x = [];
    const p = this.profileForm.get('myCheckboxGroup').value;
    for (const [key, value] of Object.entries(p)) {
      if (value){
          x.push(key);
          // console.log(`${key}: ${value}`);
      }
     }
    // console.log(x);

    // append values to send to the server
    const survey: Student = new Student();
    survey.studentId = this.profileForm.get('ID').value;
    survey.firstName = this.profileForm.get('firstName').value;
    survey.lastName = this.profileForm.get('lastName').value;
    survey.phone = this.profileForm.get('phone').value;
    survey.email = this.profileForm.get('email').value;
    survey.streetAddress = this.profileForm.get('address').get('street').value;
    survey.unit = this.profileForm.get('address').get('unit').value;
    survey.city = this.profileForm.get('address').get('city').value;
    survey.state = this.profileForm.get('address').get('state').value;
    survey.zipcode = Number(this.profileForm.get('address').get('zip').value);
    survey.graduationMonth = this.profileForm.get('G_month').value;
    survey.graduationYear =  this.profileForm.get('G_year').value;
    survey.dateOfVisit = String(this.profileForm.get('DateOfVisit').value);
    survey.url = String(this.profileForm.get('website').value);
    survey.data = String(this.profileForm.get('data').value);
    survey.comments = String(this.profileForm.get('comments').value);
    survey.likelihood = this.profileForm.get('recommendation').value;
    survey.interest = String(this.profileForm.get('why').value);
    survey.liked = String(x);

    this.registrationService.register(survey)
      .subscribe(
        response => {
          console.log('Success', response);
          // this.data.changeStudentID(survey.studentId);
          this.data.changeMeanSDData(survey.data);
        },
        error => console.error('Error!', error)
      );

    // //change view
    this.data.changeFormFlag();
    this.data.changeACKFlag();
    this.data.changeDataFlag();
    this.data.changeIDsFlag();
  }
  constructor(private registrationService: RegistrationService,
              private data: DataExchangeService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
}
