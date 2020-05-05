import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component
({
    templateUrl:'./empdetail.component.html'
})
export class EmpDetailComponent
{
     selname;
     constructor(private r:ActivatedRoute)
     {
    this.selname=
    this.r.snapshot.paramMap.get('name');
    
        }
    
}
