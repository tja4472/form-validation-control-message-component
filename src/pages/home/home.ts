import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {
    
    this.userForm = this.formBuilder.group({  
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
    
  }

  saveUser() {
    console.log('saveUser', { userForm: this.userForm });
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
}
