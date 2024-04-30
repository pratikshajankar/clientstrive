import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class ChangeprojectService {

  constructor(private http:HttpClient) { }

  GetAllchangeproject(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CHANGE_PROJECT);
  }

  AddChangedProject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_CHANGED_PROJECT,obj);
  }

  UpdateChangedproject(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_CHANGE_PROJECT,obj);
  }

  GetChangeprojectByid(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_PROJECT_BYPROJECTID+pid);
  }

DeletechangeProject(cid:any){
  return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_CHANGED_PROJECT+cid);
}

}
