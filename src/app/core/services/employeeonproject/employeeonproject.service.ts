import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeonprojectService  {

  constructor(private http:HttpClient) { }


  getAllemployeeOnProject(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_PROJECT_EMPLOYEE);
  }

  AddEmployeeonProject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_EMPLOYEE_ON_PROJECT,obj);
  }

  UpdateEmployeeOnProject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_EMPLOYEE_ON_PROJECT,obj);
  }

  EditEmployeeOnProject(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_EMP_BY_PROJECTID+pid);
  }

  DeleteEmployeeOnProject(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.DELETE_EMPLOYEE_ON_PROJECT+pid);
  }
}
