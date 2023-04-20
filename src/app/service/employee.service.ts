import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from '../models/Employee';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl: any = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get<Employee[]>(this.apiUrl);

  }

  addEmployee(employeeObj: Employee) {
    return this.httpClient.post(this.apiUrl, employeeObj,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    )
  }

  updateEmployee(employeeObj: Employee) {
    const updateUrl = this.apiUrl + '/' + employeeObj.id;
    return this.httpClient.put<void>(updateUrl, employeeObj,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }

  deleteEmployee(employeeId: any) {

    let deleteUrl = this.apiUrl + '/' + employeeId;
    return this.httpClient.delete(deleteUrl);
  }

}
