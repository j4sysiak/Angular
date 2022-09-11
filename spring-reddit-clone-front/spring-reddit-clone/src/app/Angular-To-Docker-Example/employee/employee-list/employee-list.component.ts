import { Component, OnInit } from '@angular/core';
import { ApiResponse } from "../../model/api.response";
import { EmployeeService } from "../../service/employee.service";
import { Router } from "@angular/router";
import { Employee } from "../../model/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //pierwszy sposób pobierania danych z backendu
  // employees: ApiResponse;

  //drugi sposób pobierania danych z backendu
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.refreshDataEmpl();
  }

  refreshDataEmpl() {
    this.employeeService.getEmployees().subscribe(
      response => {
        console.log(response);
        this.employees = response;
      },
      err => {
        alert("An error has occurred");
      }
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
        data => {
          console.log(data);
          this.refreshDataEmpl();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
