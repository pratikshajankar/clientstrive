import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../core/models/interfaces/IPayment';
import { Payment } from '../../core/models/classes/Payment/payment';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../../core/services/payment/payment.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientprojectService } from '../../core/services/clientproject/clientproject.service';
import { IClientProject } from '../../core/models/interfaces/Iclientproject';
import { ClientService } from '../../core/services/client/client.service';
import { IClient } from '../../core/models/interfaces/Iclient';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  VisibleSavebutton:boolean=false;
  Visibleupdatebutton:boolean=false;

  clientList:IClient[]=[];
projectList:IClientProject[]=[];

  paymentList:IPayment[]=[];
  paymentobj:Payment=new Payment()

  constructor(private http:HttpClient,private paymentsrv:PaymentService,private projectsrv:ClientprojectService,private clientsrv:ClientService){}

  ngOnInit(): void {
    this.getAllPayment();
    this.getAllProject();
    this.getAllclient();
  }

  getAllProject(){
    this.projectsrv.getAllClientProject().subscribe((res:any)=>{
this.projectList=res.data;
    })
  }

  getAllclient(){
    this.clientsrv.getAllClient().subscribe((res:any)=>{
      this.clientList=res.data;
    })
  }

  getAllPayment(){
this.paymentsrv.getAllPayment().subscribe((res:any)=>{
  this.paymentList=res.data;
})
  }

  onSave(){
this.paymentsrv.AddPayment(this.paymentobj).subscribe((res:any)=>{
  if(res.result){
    alert("Payment Added Successfully");
    this.getAllPayment();
  }
  else{
    alert(res.message);
  }
})
  }

  onUpdate(){
    this.paymentsrv.UpdatePayment(this.paymentobj).subscribe((res:any)=>{
      if(res.result){
        alert("Payment Updated Successfully");
        this.getAllProject();
      }
      else{
        alert(res.message);
      }
    })

  }

  onEdit(id:any){
this.paymentsrv.getAllPaymentbyProject(id.projectPaymentId).subscribe((res:any)=>{
  this.paymentobj=id;
})
  }

  onDelete(payid:any){
this.paymentsrv.Deletepayment(payid.projectPaymentId).subscribe((res:any)=>{
  if(res.result){
    alert("payment details deleted successfully");
    this.getAllPayment();
  }
  else{
    alert(res.message);
  }
})
  }

  Showupdatebutton(){
this.VisibleSavebutton=false;
this.Visibleupdatebutton=true;
  }

  ShowSavebutton(){
this.VisibleSavebutton=true;
this.Visibleupdatebutton=false;
  }
  

}
