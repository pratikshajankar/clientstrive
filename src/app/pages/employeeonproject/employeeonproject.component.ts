import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeonprojectService } from '../../core/services/employeeonproject/employeeonproject.service';
import { IEmpOnProject } from '../../core/models/interfaces/IEmponProj';
import { EmpOnProject } from '../../core/models/classes/EmponProject/emponproj';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { IEmployee } from '../../core/models/interfaces/IEmployee';
import { ClientprojectService } from '../../core/services/clientproject/clientproject.service';
import { IClientProject } from '../../core/models/interfaces/Iclientproject';
import { ClientService } from '../../core/services/client/client.service';
import { IClient } from '../../core/models/interfaces/Iclient';

@Component({
  selector: 'app-employeeonproject',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employeeonproject.component.html',
  styleUrl: './employeeonproject.component.css'
})
export class EmployeeonprojectComponent implements OnInit {

  VisibleSaveButton:boolean=false;
  VisibleUpdateButton:boolean=false;

empList:IEmployee[]=[];
projectList:IClientProject[]=[];
clientList:IClient[]=[];

emponprojectList:IEmpOnProject[]=[];
emponprojectobj:EmpOnProject=new EmpOnProject();

constructor(private http:HttpClient,private emponprojsrv:EmployeeonprojectService,private empsrv:EmployeeService,private projsrv:ClientprojectService,private clientsrv:ClientService){}
  
  ngOnInit(): void {
  this.getAllEmployeeonProject();
  this.getAllemployee();
  this.getAllProject();
  this.getallClient();
  }

getAllemployee(){
  this.empsrv.getAllemployee().subscribe((res:any)=>{
    this.empList=res.data;
  })
}

getAllProject(){
this.projsrv.getAllClientProject().subscribe((res:any)=>{
  this.projectList=res.data;
})
}

getallClient(){
this.clientsrv.getAllClient().subscribe((res:any)=>{
  this.clientList=res.data;
})
}

  getAllEmployeeonProject(){
this.emponprojsrv.getAllemployeeOnProject().subscribe((res:any)=>{
this.emponprojectList=res.data;
})
  }

  onSave(){
    this.emponprojsrv.AddEmployeeonProject(this.emponprojectobj).subscribe((res:any)=>{
if(res.result){
  alert("Employee Added Successfully");
  this.getAllEmployeeonProject();
}
else{
  alert(res.message);
}
    })
  }

  onEdit(id:any){
this.emponprojsrv.EditEmployeeOnProject(id.projectEmpId).subscribe((res:any)=>{
  this.emponprojectobj=id;
})
  }

  onDelete(epid:any){
this.emponprojsrv.DeleteEmployeeOnProject(epid.projectEmpId).subscribe((res:any)=>{
  if(res.result){
    alert("Employee deleted successfully");
    this.getAllEmployeeonProject();
  }
  else{
    alert(res.message);
  }
})
  }

  onUpdate(){
    this.emponprojsrv.UpdateEmployeeOnProject(this.emponprojectobj).subscribe((res:any)=>{
      if(res.result){
        alert("employee updated successfully");
        this.getAllEmployeeonProject();
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

}
