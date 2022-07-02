import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!:number;
  employee:Employee=new Employee();
  constructor(private router: Router,private employeeService : EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
this.employeeService.getEmployeeById(this.id).subscribe(data=>{
  this.employee=data;
});
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
      }
    deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe(data=>{
        this.router.navigate(['/']);
      })
    }


}
