import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/app.component';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {
 employees:Array<Employee>=[
  {
    name:"yossi cohen",
    phone:"0501234321",
    email:"yossi@gmail.com",
    address:"20th wiesman beer tovia"
  },
  {
    name:"hila david",
    phone:"0547564775",
    email:"hila@gmail.com",
    address:"20th wiesman beer tovia"
  },
  {
    name:"lihi levy",
    phone:"0578476354",
    email:"lihi@gmail.com",
    address:"20th wiesman haifa"
  },
  {
    name:"yoav katz",
    phone:"0506543562",
    email:"yoav@gmail.com",
    address:"21th wiesman beer sheva"
  },
  {
    name:"liav brushenski",
    phone:"0522333432",
    email:"liav@gmail.com",
    address:"20th etrog hadera"
  },
  {
    name:"liat biloo",
    phone:"0547564756",
    email:"liat@gmail.com",
    address:"4th gilo naharia"
  }
 ];
 filtered:Array<Employee>=[];
 getEmployee() {
    let text=document.getElementById('text') as HTMLInputElement;
    let word=text?.value;
    this.filtered=this.employees.filter(employee=>employee.name?.includes(word))
  }

    ngOnInit(): void {
        this.getEmployee();
    }
}
