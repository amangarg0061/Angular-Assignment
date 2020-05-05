import {Component} from  '@angular/core';
@Component({
    templateUrl:'./department.component.html'
})
export  class DepartmentComponent
{
    depts=[
        {name:'IT', city:'Goa'},
        {name:'HR', city:'Patna'},
        {name:'Finance', city:'Pune'}
    ];
}
