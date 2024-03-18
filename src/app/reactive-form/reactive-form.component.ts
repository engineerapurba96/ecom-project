import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm!:FormGroup;
  companyRecords: any[] = [];


  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      companyname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      adminname:['',[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]+$')]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required, Validators.pattern('^[\+0-9 ]+$')]],

    });

  }
  OnSubmit(){
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.companyRecords.push(formData);
      this.myForm.reset();
      console.log(formData);
    }
  }

}
