import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../core/services/client/client.service';
import { Client } from '../../core/models/classes/Client/client';
import { IClient } from '../../core/models/interfaces/Iclient';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  isSideDivVisible:boolean=false;
  
clientobj:Client=new Client();

clientList:IClient[]=[];

  constructor(private http:HttpClient,private clientsrv:ClientService){

  }
  ngOnInit(): void {
    this.getallclient();
  }

getallclient(){
this.clientsrv.getAllClient().subscribe((res:any)=>{
  this.clientList=res.data;
})
}

onSave(){
this.clientsrv.addNewClient(this.clientobj).subscribe((res:any)=>{
  if(res.result){
    alert("data saved Successfully");
    this.getallclient();
  }
  else{
    alert(res.message);
  }
})
}

onUpdate(){
  this.clientsrv.UpdateClient(this.clientobj).subscribe((res:any)=>{
    if(res.result){
      alert("data updated successfully");
      this.getallclient();
    }
    else{
      alert(res.message);
    }
  })
}

onDelete(cid:any){
  this.clientsrv.deleteClient(cid.clientId).subscribe((res:any)=>{
if(res.result){
  alert("data deleted succesfully");
  this.getallclient();
}
else{
  alert(res.message);
}
  })
}

onEdit(id:any){
this.clientsrv.EditClient(id.clientId).subscribe((res:any)=>{
  this.clientobj=id;
})
}

}
