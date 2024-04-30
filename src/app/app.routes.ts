import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ClientComponent } from './pages/client/client.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectchangeComponent } from './pages/projectchange/projectchange.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },

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
    }
];
