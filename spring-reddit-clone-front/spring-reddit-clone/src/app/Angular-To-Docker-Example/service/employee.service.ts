import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api.response";
import { Employee } from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string = environment.baseUrl+'/api/employees/';

  constructor(private http: HttpClient) { }

  // pierwszy sposób pobierania danych, bezpośrednio na zwrotce mamy ApiResponse
  // getEmployees(): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }
  // drugi sposób pobierania danych, bezpośrednio na zwrotce mamy tablicę Employee[]
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createEmployee(employee: Employee): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, employee);
  }
  // createEmployee(employee: Employee): Observable<Employee[]> {
  //   return this.http.post<Employee[]>(this.baseUrl, employee);
  // }

  updateEmployee(id: number, employee: Employee): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + employee.id, employee);
  }

  // pierwszy sposób usuwania danych, bezpośrednio na zwrotce mamy ApiResponse
  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
  // drugi sposób usuwania danych, bezpośrednio na zwrotce mamy tablicę Employee[]
  // deleteEmployee(id: number): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.baseUrl + id);
  // }
}




















