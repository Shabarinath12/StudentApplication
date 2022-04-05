import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from "jspdf";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  

  constructor(  private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.form.controls; }

  @ViewChild('content') content: ElementRef;

  onSubmit() {
    this.submitted = true;

  
     if (this.form.invalid) {
        return;
    }

}

   
  
}
