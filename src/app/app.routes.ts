import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ClientComponent } from './pages/client/client.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectchangeComponent } from './pages/projectchange/projectchange.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { EmployeeonprojectComponent } from './pages/employeeonproject/employeeonproject.component';
import { NavbarComponent } from './pages/navbar/navbar.component';


export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },

    {
        path:'navbar',component:NavbarComponent,
    
   children:[

    {
        path: 'employee', component: EmployeeComponent
    },
    
    {
        path: 'client', component: ClientComponent
    },
    {
        path:'project',component:ProjectComponent
    },
    {
        path:'projectchange',component:ProjectchangeComponent
    },
    {
        path:'meetings',component:MeetingsComponent
    },
    {
        path:'payment',component:PaymentComponent
    },
    {
        path:'employeeonproject',component:EmployeeonprojectComponent
    }
]
}
];
