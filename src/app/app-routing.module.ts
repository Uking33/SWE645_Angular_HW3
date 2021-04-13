import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {StudentListComponent} from './student-list/student-list.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'student-list', component: StudentListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})
export class AppRoutingModule { }
