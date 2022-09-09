import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiResponse} from "../../model/api.response";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<ApiResponse>;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees();
  }

  deleteEmployee(id) {

  }

  updateEmployee(id) {

  }
}
