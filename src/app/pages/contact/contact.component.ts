import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

import { Util } from "../../util/validators";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  dd = [
    { id: '1', value: 'value 1' },
    { id: '2', value: 'value 2' },
  ];

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Util.validatePhone]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    //console.log(this.registerForm.controls);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  searchKeydown(e) {
    this.dd = [
      { id: "3", value: "value 3" },
      { id: "4", value: "value 4" }
    ];
  }

}
