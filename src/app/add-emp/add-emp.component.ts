import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  data = {};
  submitted = false;
  addForm: FormGroup;
  constructor(private location: Location, private fb:FormBuilder,private service:EmployeeService,private router:Router) {
    this.addForm = this.fb.group({
      id:['',[Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      emp_name:['',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      emp_salary:['',[Validators.required, Validators.pattern('[0-9]*')]],
      emp_email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      emp_dob:['',[Validators.required,Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      emp_age:['',[Validators.required, Validators.pattern('[0-9]*'), Validators.max(70),Validators.min(20)]],
    })
   }

  ngOnInit() {
  }
  get f() {return this.addForm.controls}

  addEmp() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.service.createEmployee(this.data);
    this.router.navigate(['/list-emp']);
  }
  back(){
    this.location.back();
  }
}
