import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  ShowForm = false;
  ShowACK = false;
  ShowWinner = false;
  ShowData = false;
  ShowStudentsIDs = true;
  ShowReadOnly = false;

  showform(){
    this.ShowForm = true;
  }
  Notshowform(){
    this.ShowForm = false;
  }

  constructor() { }
}
