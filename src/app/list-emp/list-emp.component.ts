import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  employees: Employee[];
  p: number = 1;
  
  constructor(private EmpService: EmployeeService, private router: Router) { }

  ngOnInit() {
    // this.EmpService.getEmployee()
    //   .subscribe((data: Employee[]) => {
    //     this.employees = data;
    //   });
    this.employees = this.EmpService.f_data;

  }

  deleteEmp(i) {
    if (confirm('Are you sure?')) {
      const index = this.employees.indexOf(i);
      this.employees.splice(index, 1);
    }
  }

  editEmp(editData) {
    this.EmpService.editData = editData;
    this.router.navigate(['/update', editData.id]);
  }
 

}
