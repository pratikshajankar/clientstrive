import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 

  constructor(private http:HttpClient) { }

  getAllClient(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CLIENT);
  }

  addNewClient(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_CLIENT,obj)
  }

  UpdateClient(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_CLIENT,obj);
  }

  deleteClient(cid:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_CLIENT+cid);
  }

  EditClient(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.EDIT_CLIENT+id);
  }
}
