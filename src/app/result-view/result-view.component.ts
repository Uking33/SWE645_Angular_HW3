import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationService} from '../registration.service';
import {DataExchangeService} from '../data-exchange.service';
import {Data} from '../models/data.model';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  numbers = new Data();
  url = 'http://localhost:3000/';
  constructor( private http: HttpClient, private dataService: DataExchangeService) { }

  ngOnInit(): void {
    this.dataService.currentMeanSDData.subscribe(numbers => {
      console.log(numbers);
      const fullUrl = this.url + numbers;
      this.http.get<Data>(fullUrl).subscribe(result => {
        this.numbers = result;
        this.dataService.changeMeanData(this.numbers.mean);
      } );
      console.log(this.numbers.mean);
    });
  }

}
