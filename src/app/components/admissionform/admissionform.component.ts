import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService  } from 'src/app/services/shared.service';
 
 
 @Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {
    data:any;
   submitted= false;
   fg:FormGroup;

  constructor(public service:SharedService ) { }

  ngOnInit(): void {
    //  this.getData();
    
   }

  onSubmit(){
    this.service.AddStudents().subscribe(
      (res:any) => {
          if(res.success)
          console.log(res);
          this.submitted = true;
          this.service.formModel.reset();
        {
         
        }  
          });
        
      err => {
        console.log(err);
      }
   } 
 
    
  //  getData(){
  //    this.service.get().subscribe((
  //      data:any ) => { 
  //        console.log(data);
  //      } 
  //    )
  //  }
  
  
};
