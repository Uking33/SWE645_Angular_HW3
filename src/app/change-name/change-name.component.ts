import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {

  closeResult = '';
  name: string;
  newName: string;
  constructor(private modalService: NgbModal, private cookieService: CookieService) { }
  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'save') {
        this.cookieService.set('name', this.newName);
        this.name = this.newName;
      }
      else if (!this.cookieService.check('name')) { this.name = 'Sexy'; }
    }, () => {
      if (!this.cookieService.check('name')) { this.name = 'Sexy'; }
    });
  }
  ngOnInit(): void {
    if (this.cookieService.check('name')){
      this.name = this.cookieService.get('name');
    } else {
      document.getElementById('not-me').click();
    }
  }

}
