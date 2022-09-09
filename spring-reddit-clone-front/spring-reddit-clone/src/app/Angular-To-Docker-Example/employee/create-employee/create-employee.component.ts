import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../service/employee.service";
import { Router } from "@angular/router";
import {Employee} from "../../model/employee.model";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted=false;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.submitted=true;
    this.employeeService.createEmployee(this.employee).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }


  onSubmit() {

  }
}
