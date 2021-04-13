import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Flags} from './models/Flags.model';
import {ApplicationRef } from '@angular/core';

@Injectable()
export class DataExchangeService {

  // private meanSDData = new BehaviorSubject('Default Value');
  private meanSDData = new BehaviorSubject('0');
  private studentID = new BehaviorSubject('Default Value');
  private meanValue = new BehaviorSubject(0);
  private flags: Flags = new Flags();
  currentMeanSDData = this.meanSDData.asObservable();
  // currentMeanSDData = this.meanSDData;
  currentStudentID = this.studentID.asObservable();
  currentFormFlag = this.flags.FormFlag;
  currentACKFlag = this.flags.ACKFlag;
  currentDataFlag = this.flags.DataFlag;
  currentIDsFlag = this.flags.IDsFlag;
  currentWinnerFlag = this.flags.WinnerFlag;
  currentReadOnlyFlag = this.flags.ReadonlyFlag;

  constructor() { }

  changeMeanData(n: number): void {
    console.log(n);
    this.meanValue.next(n);
  }
  changeMeanSDData(message: string): void {
    this.meanSDData.next(message);
    // this.meanSDData = message;
  }
  changeStudentID(message: string): void {
    console.log('changing SID');
    this.studentID.next(message);
  }
  changeFormFlag(): void {
    this.currentFormFlag = !this.currentFormFlag;
  }
  changeACKFlag(): void {
    this.currentACKFlag = !this.currentACKFlag;
  }
  changeDataFlag(): void {
    this.currentDataFlag = !this.currentDataFlag;
  }
  changeIDsFlag(): void {
    this.currentIDsFlag = !this.currentIDsFlag;
  }
  changeWinnerFlag(): void {
    this.currentWinnerFlag = !this.currentWinnerFlag;
  }
  changeReadOnlyFlag(): void {
    this.currentReadOnlyFlag = !this.currentReadOnlyFlag;
  }
}
