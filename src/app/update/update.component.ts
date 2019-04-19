import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  f_data = {};
  updateForm:FormGroup;

  // maxDate = new Date().toJSON().split('T')[0];

  constructor(private location: Location, private fb:FormBuilder , private empserv:EmployeeService, private router: Router) { 
    this.updateForm = this.fb.group({
      id:['',[Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      emp_name:['',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      emp_email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      emp_dob:['',[Validators.required,Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      emp_salary:['',[Validators.required, Validators.pattern('[0-9]*')]],
      emp_age:['',[Validators.required, Validators.pattern('[0-9]*'), Validators.max(70),Validators.min(20)]],
    })
  }
  get validControl() {return this.updateForm.controls}
  get f() {return this.updateForm.controls}
  ngOnInit() {
    this.f_data =this.empserv.editData;

    console.log(this.f_data);
  }

  updateEmp(){
    this.empserv.updateEmployee(this.updateForm.value);
      this.router.navigate(['/list-emp']); 
  }

  back(){
    this.location.back();
  }
}
