import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public employees: Employee[] = [];
  
  constructor(private employeeService: EmployeeService){ }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[])=>{
        this.employees = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
