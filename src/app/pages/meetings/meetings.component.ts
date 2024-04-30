import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeetingService } from '../../core/services/meeting/meeting.service';
import { IMeetings } from '../../core/models/interfaces/IMeetings';
import { Meetings } from '../../core/models/classes/Meetings/meetings';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { IEmployee } from '../../core/models/interfaces/IEmployee';
import { IClientProject } from '../../core/models/interfaces/Iclientproject';
import { ClientprojectService } from '../../core/services/clientproject/clientproject.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent implements OnInit {

  VisibleSaveButton:boolean=false;
  VisibleUpdateButton:boolean=false;

  employeeList:IEmployee[]=[];
  projectList:IClientProject[]=[];

meetingList:IMeetings[]=[];
meetingobj:Meetings=new Meetings();

  constructor(private http:HttpClient,private meetingsrv:MeetingService,private empsrv:EmployeeService,private projectsrv:ClientprojectService){}
 
  ngOnInit(): void {
    this.getallmeetings();
    this.getprojectemployee();
    this.getallproject();
  }

  getprojectemployee(){
    this.empsrv.getProjectEmployee().subscribe((res:any)=>{
      this.employeeList=res.data;
    })
  }

  getallproject(){
this.projectsrv.getAllClientProject().subscribe((res:any)=>{
  this.projectList=res.data;
})
  }

  getallmeetings(){
    this.meetingsrv.getAllMeetings().subscribe((res:any)=>{
this.meetingList=res.data;
    })
  }

  onSave(){
    this.meetingsrv.Addmeetings(this.meetingobj).subscribe((res:any)=>{
if(res.result){
  alert("data saved successfully");
  this.getallmeetings();
}
else{
  alert(res.message);
}
    })
  }

  onUpdate(){
    this.meetingsrv.Updatemeetings(this.meetingobj).subscribe((res:any)=>{
if(res.result){
  alert("data updated successfully");
  this.getallmeetings();
}
else{
  alert(res.message);
}
    })
  }

  onEdit(id:any){
this.meetingsrv.Editmeeting(id.projectMeetingId).subscribe((res:any)=>{
  this.meetingobj=id;
})
  }

  onDelete(mid:any){
this.meetingsrv.Deletemeeting(mid.projectMeetingId).subscribe((res:any)=>{
  if(res.result){
    alert("data deleted successfully");
    this.getallmeetings();
  }
  else{
    alert(res.message);
  }
})
  }

  Showupdatebutton(){
this.VisibleSaveButton=false;
this.VisibleUpdateButton=true;
  }

  Showsavebutton(){
    this.VisibleSaveButton=true;
    this.VisibleUpdateButton=false;
  }

  onreset(){
    this.meetingobj=new  Meetings();
  }

}
