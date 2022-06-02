import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ppl',
  templateUrl: './show-ppl.component.html',
  styleUrls: ['./show-ppl.component.css']
})
export class ShowPplComponent implements OnInit {

  constructor(private service:SharedService) { }

  //Added Default empty array
  PeopleList:any=[];

  // ModalTitle:string;// Error NO Initializer
  ActivateEditPeopleComp:boolean=false;
  ppl:any;

  //Onload this will be triggered
  ngOnInit(): void {
    // alert("Hello!'");
    this.refreshPeopleList();
  }

  //method to Add people 
  addClick(){
    console.log("show-ppl : Add new people")
    // this.ppl={
    //   PeopleEmpId:0,
    //   PeopleName:""
    // }
    // this.ModalTitle="Add People";
    // this.ActivateEditPeopleComp=true;
  }

   
  //method to Edi People 
  editClick() {
  // editClick(item) {
    console.log("show-ppl : Edit New People")
    // this.ppl=item;
    // this.ModalTitle="Edit People";
    // this.ActivateEditPeopleComp=true;
  }

  //method to Close People
  closeClick() {  
    console.log("show-ppl : Close New People")
  }

  //method to refresh the list 
  refreshPeopleList(){
    this.service.getPeopleList().subscribe(data=> {
      this.PeopleList=data;
    })
  }

}
