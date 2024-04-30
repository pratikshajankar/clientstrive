import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projectobj } from '../../core/models/classes/ClientProject/clientproject';
import { ClientprojectService } from '../../core/services/clientproject/clientproject.service';
import { IClientProject } from '../../core/models/interfaces/Iclientproject';
import { DatePipe } from '@angular/common';
import { IClient } from '../../core/models/interfaces/Iclient';
import { ClientService } from '../../core/services/client/client.service';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { IEmployee } from '../../core/models/interfaces/IEmployee';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

Visiblesavebutton:boolean=false;
Visibleupdatebutton:boolean=false;

clientList:IClient[]=[];
employeeList:IEmployee[]=[];

  projectobj:Projectobj=new Projectobj();
projectList:IClientProject[]=[];

  constructor(private http:HttpClient,private projectsrv:ClientprojectService,private clientsrv:ClientService,private employeesrv:EmployeeService){

  }

  ngOnInit(): void {
    this.getallclientproject();
    this.getallclient();
    this.getallemployee();
  }

  getallclient(){
    this.clientsrv.getAllClient().subscribe((res:any)=>{
this.clientList=res.data;
    })
  }
  getallemployee(){
    this.employeesrv.getAllemployee().subscribe((res:any)=>{
this.employeeList=res.data;
    })
  }

  getallclientproject(){
this.projectsrv.getAllClientProject().subscribe((res:any)=>{
  this.projectList=res.data;
})
  }

  Addproject(){
    this.projectsrv.AddProject(this.projectobj).subscribe((res:any)=>{
if(res.result){
  alert("data saved successfully");
  this.getallclientproject();
}
else{
  alert(res.message);
}
    })
  }

  Updateproject(){
this.projectsrv.UpdateProject(this.projectobj).subscribe((res:any)=>{
  if(res.result){
    alert("data updated successfully");
    this.getallclientproject();
  }
  else{
    alert(res.message);
  }
})
  }

  onEdit(pid:any){
this.projectsrv.getProjectByProjectid(pid.clientProjectId).subscribe((res:any)=>{
  this.projectobj=pid;
})
  }

  onDelete(id:any){
this.projectsrv.DeleteProject(id.clientProjectId).subscribe((res:any)=>{
  if(res.result){
    alert("data deleted successfully");
    this.getallclientproject();
  }
  else{
    alert(res.message);
  }
})
  }

  ShowSavebutton(){
this.Visiblesavebutton=true;
this.Visibleupdatebutton=false;
  }

  Showupdatebutton(){
this.Visiblesavebutton=false;
this.Visibleupdatebutton=true;
  }

}
