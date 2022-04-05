import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
 import { Observable } from 'rxjs';
  
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  postData(value: any) {
    throw new Error('Method not implemented.');
  }
 
   readonly baseURL: string = 'https://localhost:44322/api/Student/Addstudent';
  header: HttpHeaders | { [header: string]: string | string[]; };
 
    
  constructor( private fb:FormBuilder ,private http: HttpClient) {
    }
    httpOptions = {  
      headers: new HttpHeaders({  
        'Content-Type': 'application/json' 
       }) 
       
       
    } 

    


   formModel = this.fb.group({
     StudentId :['' , Validators.required],
     Title :['' ,  Validators.required],
     FirstName :['', Validators.required],
     LastName :['',  Validators.required],
     DOB :['' ,  Validators.required],
     Email :['' , Validators.email],
     Password: ['',[Validators.required, Validators.minLength(4)] ],
     Gender: ['']
   })


   AddStudents(){
    
    var Student= {
       studentid: this.formModel.value.StudentId,
      title:this.formModel.value.Title,
      firstname:this.formModel.value.FirstName,
      lastname:this.formModel.value. LastName,
      dob:this.formModel.value. DOB,
      email:this.formModel.value.Email,
      password:this.formModel.value. Password,
      gender: this.formModel.value.Gender


    }
     return this.http.post(this.baseURL, Student   , { headers: this.header, responseType: 'text'  } 
  
    );
    }
 

  get() {
     return this.http.get('https://localhost:44322/api/Student/Get');
 }  
   };


   
 
 