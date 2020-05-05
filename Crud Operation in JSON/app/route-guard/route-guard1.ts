import {Injectable} from '@angular/core';
import {CanActivate}from '@angular/router';
@Injectable()
export  class EmpGuard implements CanActivate
{
    canActivate():boolean
    {
return confirm("Do you want  to load emp component?");
    }
}