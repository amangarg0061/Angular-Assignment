import {Routes} from '@angular/router';
import {DepartmentComponent} from './views/department.component';
import {EmployeeComponent} from './views/employee.component';
import {PageNotFoundComponent} 
from './views/pagenofound.component';
import { Component } from '@angular/core';
import {EmpGuard} from './route-guard/route-guard1';
import {DeptGuard} from './route-guard/route-guard2';
import {EmpDetailComponent} from './views/empdetail.component';
export const  routes:Routes=[
{path:'', redirectTo:'/emp',pathMatch:"full"},   
 {path:'emp', component:EmployeeComponent,
canActivate:[EmpGuard]},
{path:'emp/:name', component:EmpDetailComponent},
 {path:'dept', component:DepartmentComponent,
 canActivate:[DeptGuard]},
 {path:'**', component:PageNotFoundComponent}


];

