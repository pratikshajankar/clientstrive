import { Component, OnInit } from '@angular/core';
import { Loginobj } from '../../core/models/classes/login/login';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginobj:Loginobj=new Loginobj();

  constructor(private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
  
  }

  login(){
this.http.post("https://freeapi.gerasim.in/api/ClientStrive/Login",this.loginobj).subscribe((res:any)=>{
localStorage.setItem('loginToken',res.data.token);
this.router.navigateByUrl('/navbar')
// alert("Login successfully");
})
  }
  
  reset(){
    this.loginobj={
      "password": "",
    "username": ""
    }
  }

}
