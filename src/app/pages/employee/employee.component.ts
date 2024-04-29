import { HttpClient} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { IDesignation, IEmployee, IRole } from '../../core/models/interfaces/IEmployee';
import { EmployeeObj } from '../../core/models/classes/Employee/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  visibleSavebutton:boolean=false;
  visibleUpdatebutton:boolean=false;

designList:IDesignation[]=[];
roleList:IRole[]=[];

  employeeList:IEmployee[]=[];
  employeeobj:EmployeeObj=new EmployeeObj();

  constructor(private http:HttpClient,private empsrv:EmployeeService){

  }
  ngOnInit(): void {
    this.getallemployee();
    this.getalldesignation();
    this.getallrole();
  }

  getalldesignation(){
this.empsrv.getAllDesignation().subscribe((res:any)=>{
  this.designList=res.data;
})
  }

  getallrole(){
    this.empsrv.getAllRole().subscribe((res:any)=>{
this.roleList=res.data;
    })
  }

getallemployee(){
  this.empsrv.getAllemployee().subscribe((res:any)=>{
this.employeeList=res.data;
  })
}

Addemployee(){
  this.empsrv.createEmployee(this.employeeobj).subscribe((res:any)=>{
    if(res.result){
alert("data saved successfully");
this.getallemployee();
    }
    else{
      alert(res.message);
    }
  })
}

updateEmployee(){
  this.empsrv.UpdateEmployee(this.employeeobj).subscribe((res:any)=>{
    if(res.result){
      alert("data updated successfully");
      this.getallemployee();
    }
    else{
      alert(res.message);
    }
  })
}

onEdit(id:any){
  this.empsrv.getEmployeebyEmpid(id.empId).subscribe((res:any)=>{
this.employeeobj=id;
  })
}

onDelete(eid:any){
  this.empsrv.deleteEmpbyEmpid(eid.empId).subscribe((res:any)=>{
    if(res.result){
      alert("data deleted successfully");
      this.getallemployee();
    }
    else{
      alert(res.message);
    }
  })
}

reset(){
 this.employeeobj=new EmployeeObj();
}

savebutton(){
  this.visibleSavebutton=true;
  this.visibleUpdatebutton=false;
}

updatebutton(){
  this.visibleSavebutton=false;
  this.visibleUpdatebutton=true;
}

}
