import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllDesignation(){
return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_DESIGNATION);
  }

  getAllemployee(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_EMPLOYEE);
  }

  createEmployee(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_EMPLOYEE,obj);
  }

  UpdateEmployee(obj:any){
    return this.http.put(APIConstant.API_URL+APIConstant.UPDATE_EMPLOYEE,obj);
  }

  getEmployeebyEmpid(empid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMPBY_EMPID+empid);
  }

  deleteEmpbyEmpid(eid:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_EMPLOYEE+eid);
  }

}
