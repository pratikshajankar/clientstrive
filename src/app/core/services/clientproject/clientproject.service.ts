import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class ClientprojectService {

  constructor(private http:HttpClient) { }

  getAllClientProject(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CLIENTPROJECT);
  }


  getProjectByProjectid(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_PROJECT_BYPROJECTID+pid);
  }

  AddProject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_PROJECT,obj);
  }

  UpdateProject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_PROJECT,obj);
  }

  DeleteProject(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.DELETE_PROJECT+id);
  }
}
