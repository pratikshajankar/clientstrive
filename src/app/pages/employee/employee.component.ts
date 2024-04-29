import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { IDesignation, IEmployee } from '../../core/models/interfaces/IEmployee';
import { EmployeeObj } from '../../core/models/classes/Employee/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  isButtonVisible:boolean=false;

designList:IDesignation[]=[];
  employeeList:IEmployee[]=[];
  employeeobj:EmployeeObj=new EmployeeObj();

  constructor(private http:HttpClient,private empsrv:EmployeeService){

  }
  ngOnInit(): void {
    this.getallemployee();
    this.getalldesignation();
  }

  getalldesignation(){
this.empsrv.getAllDesignation().subscribe((res:any)=>{
  this.designList=res.data;
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
  this.employeeobj={
    "roleId": 0,
    "userName": "",
    "empCode":"",
    "empId": 0,
    "empName": "",
    "empEmailId":"",
    "empDesignationId": 0,
    "empContactNo":  "",
    "empAltContactNo": "",
    "empPersonalEmailId":  "",
    "empExpTotalYear": 0,
    "empExpTotalMonth": 0,
    "empCity":  "",
    "empState": "",
    "empPinCode": "",
    "empAddress": "",
    "empPerCity":  "",
    "empPerState": "",
    "empPerPinCode": "",
    "empPerAddress": "",
    "password":"",
    // "erpEmployeeSkills": [
    //   {
    //     "empSkillId": 0,
    //     "empId": 0,
    //     "skill": "",
    //     "totalYearExp": 0,
    //     "lastVersionUsed": "",
    //   }
    // ],
    // "ermEmpExperiences": [
    //   {
    //     "empExpId": 0,
    //     "empId": 0,
    //     "companyName": "",
    //     "startDate": "2024-04-27T08:57:01.920Z",
    //     "endDate": "2024-04-27T08:57:01.920Z",
    //     "designation":  "",
    //     "projectsWorkedOn": "",
    //   }
    // ]
}
}


}
