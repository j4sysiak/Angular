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
    this.employeeService.getEmployees().subscribe(
      response => {
        this.employees = response;
      },
      err => {
        alert("An error has occurred");
      }
    );
  }

  deleteEmployee(id) {
  }

  updateEmployee(id) {
  }
}
