import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-ppl',
  templateUrl: './edit-ppl.component.html',
  styleUrls: ['./edit-ppl.component.css']
})
export class EditPplComponent implements OnInit {

  constructor() { }

  @Input() ppl:any 
  DepartmentName:string
  // PeopleEmpId:string;
  // PeopleName:string;

  ngOnInit(): void {
    // this.PeopleEmpId=this.ppl.PeopleEmployeeId;
    // this.PeopleName=this.ppl.Name;
  }

  addPeople() {
    console.log("Add People");
  }

  updatePeople() {
    console.log("Update People");
  }

}
