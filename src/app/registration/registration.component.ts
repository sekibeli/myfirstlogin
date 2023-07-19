import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(public auth: AuthService, private route: Router){}


hide: boolean = true;
hideConfirmPassword: boolean = true;

  registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),

  })

  registerWithEmailAndPassword(){
    console.log(this.registrationForm.value);
    const userData = Object.assign({email: this.registrationForm.value.username}, this.registrationForm.value);
    console.log(userData);
    this.auth.registerWithEmailAndPassword(userData).then((result: any) => {
      this.route.navigateByUrl('home');
        }).catch( (error: any) => {
          console.error(error);
        })  ;
    
  }

}
