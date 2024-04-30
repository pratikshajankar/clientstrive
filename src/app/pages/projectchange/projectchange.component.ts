import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeprojectService } from '../../core/services/changepeoject/changeproject.service';
import { Changeproject } from '../../core/models/classes/ChangeProject/changeproject';
import { IChangeProject } from '../../core/models/interfaces/IChangeproject';
import { DatePipe } from '@angular/common';
import { IClientProject } from '../../core/models/interfaces/Iclientproject';
import { IEmployee } from '../../core/models/interfaces/IEmployee';
import { ClientprojectService } from '../../core/services/clientproject/clientproject.service';
import { EmployeeService } from '../../core/services/employee/employee.service';

@Component({
  selector: 'app-projectchange',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './projectchange.component.html',
  styleUrl: './projectchange.component.css'
})
export class ProjectchangeComponent implements OnInit {

  Visiblesavebutton:boolean=false;
  Visibleupdatebutton:boolean=false;

projectList:IClientProject[]=[];
employeeList:IEmployee[]=[];

  changeprojogj:Changeproject=new Changeproject();
  changeprojList:IChangeProject[]=[];

constructor(private http:HttpClient,private changeprojsrv:ChangeprojectService,private projectsrv:ClientprojectService,private empsrv:EmployeeService){}

ngOnInit(): void {
  this.getallchangeproject();
  this.getallproject();
  this.getallemployee();
  
}

getallchangeproject(){
  this.changeprojsrv.GetAllchangeproject().subscribe((res:any)=>{
this.changeprojList=res.data;
  })
}

Onsave(){
  this.changeprojsrv.AddChangedProject(this.changeprojogj).subscribe((res:any)=>{
    if(res.result){
      alert("data saved successfully");
      this.getallchangeproject();
    }
    else{
      alert(res.message);
    }
  })
}

Onupdate(){
  this.changeprojsrv.UpdateChangedproject(this.changeprojogj).subscribe((res:any)=>{
    if(res.result){
      alert("data updated successfully");
      this.getallchangeproject();
    }
    else{
      alert(res.message);
    }
  })

}

onEdit(id:any){
this.changeprojsrv.GetChangeprojectByid(id.projectChangeId).subscribe((res:any)=>{
  this.changeprojogj=id;
})
}

onDelete(cid:any){
this.changeprojsrv.DeletechangeProject(cid.projectChangeId).subscribe((res:any)=>{
  // this.changeprojogj=cid;
  if(res.result){
    alert("data deleted successfully");
    this.getallchangeproject();
  }
  else{
    alert(res.message);
  }
})
}

getallproject(){
this.projectsrv.getAllClientProject().subscribe((res:any)=>{
  this.projectList=res.data;
  this.getallchangeproject();
})
}

getallemployee(){
this.empsrv.getAllemployee().subscribe((res:any)=>{
  this.employeeList=res.data;
})
}

Showupdatebutton(){
this.Visiblesavebutton=false;
this.Visibleupdatebutton=true;
}

Showsavebutton(){
  this.Visiblesavebutton=true;
  this.Visibleupdatebutton=false;
}

onreset(){
  this.changeprojogj=new Changeproject();
}
}
