import {Component} from  '@angular/core';
import {Router} from '@angular/router';
@Component({
    templateUrl:'./employee.component.html'
})
export  class EmployeeComponent
{
    emps=[
        {name:'Ajay', city:'Bangalore'},
        {name:'Ajit', city:'Chennai'},
        {name:'Karan', city:'Delhi'}
    ];
    constructor(private rou:Router){}
    onSelect(emp)
    {
        this.rou.navigate(['/emp', emp.name]);
    }

}
