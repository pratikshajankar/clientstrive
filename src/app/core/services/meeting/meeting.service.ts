import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http:HttpClient) { }

  getAllMeetings(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_MEETINGS);
  }

  Addmeetings(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_MEETING,obj);
  }

  Updatemeetings(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_MEETING,obj);
  }

  Editmeeting(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_MEETINGBY_PROJECTID+pid);
  }

  Deletemeeting(mid:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_MEETING+mid);
  }
}
