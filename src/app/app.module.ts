import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule, FormsModule } from "@angular/forms";  
  
import { AppComponent } from './app.component';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import { EmployeeService } from './service/employee.service';
import { UpdateComponent } from './update/update.component'; 

import {NgxPaginationModule} from 'ngx-pagination';

  
@NgModule({  
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent, UpdateComponent  
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],  
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }
