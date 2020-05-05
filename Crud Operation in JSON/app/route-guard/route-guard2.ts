import {Injectable} from '@angular/core';
import {CanActivate}from '@angular/router';
@Injectable()
export  class DeptGuard implements CanActivate
{
    canActivate():boolean
    {
return confirm("Do you want  to load dept component?");
    }
}