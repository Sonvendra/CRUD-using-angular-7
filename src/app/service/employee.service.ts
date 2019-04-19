import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  ApiURL:string = 'http://localhost:3000/posts/';

  editData = {};
  f_data = [{
    "id": 1,
    "emp_name": "Leanne Graham",
    "emp_salary": 82800,
    "emp_age": 28,
    "emp_email": "Julianne.OConner@kory.org",
    "emp_dob": "1980-02-12"
  },
  {
    "id": 2,
    "emp_name": "Clementine Bauch",
    "emp_salary": 32500,
    "emp_age": 29,
    "emp_email": "Rey.Padberg@karina.biz",
    "emp_dob": "1980-10-12"
  },
  {
    "id": 3,
    "emp_name": "Leanne Graham",
    "emp_salary": 42555,
    "emp_age": 28,
    "emp_email": "Chaim_McDermott@dana.io",
    "emp_dob": "1980-08-12"
  },
  {
    "id": 4,
    "emp_name": "Clementina DuBuque",
    "emp_salary": 82800,
    "emp_age": 58,
    "emp_email": "Julianne.OConner@kory.org",
    "emp_dob": "1980-02-12"
  },
  {
    "id": 5,
    "emp_name": "Bauch",
    "emp_salary": 32500,
    "emp_age": 39,
    "emp_email": "Rey.Padberg@karina.biz",
    "emp_dob": "1980-10-12"
  },
  {
    "id": 6,
    "emp_name": "Graham",
    "emp_salary": 42555,
    "emp_age": 48,
    "emp_email": "Chaim_McDermott@dana.io",
    "emp_dob": "1980-08-12"
  }];

  createEmployee(data: any) {
    this.f_data.push(data);
}
  // getEmployee(){
  //   return this.http.get<Employee[]>(this.ApiURL);
  // }
  delEmployee(id: number){
    return this.http.delete<Employee[]>(this.ApiURL + id);
  }
  // createEmployee(employee: Employee){
  //   return this.http.post(this.ApiURL, employee);
  // }
  getEmployeeByID(id: number){
    return this.http.get<Employee>(this.ApiURL + '/' + id);
  }
  updateEmployee(employee: Employee){
    return this.http.put(this.ApiURL + '/' + employee.id, employee);
  }

}
