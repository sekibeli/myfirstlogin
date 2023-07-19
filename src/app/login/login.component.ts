import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(public auth: AuthService, private route: Router){}

hide:boolean = true;
passwordControl: FormControl = new FormControl('', Validators.required)

loginForm: FormGroup = new FormGroup({
  username: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
})

loginWithGoogle(){
  this.auth.signinWithGoogle().then((result: any) => {
this.route.navigateByUrl('home');
  }).catch( (error: any) => {
    console.error(error);
  })
}

loginWithEmailAndPassword(){
  console.log(this.loginForm.value);
  const userData = Object.assign({email: this.loginForm.value.username}, this.loginForm.value);
  console.log(userData);
  this.auth.loginWithEmailAndPassword(userData).then((result: any) => {
    this.route.navigateByUrl('home');
      }).catch( (error: any) => {
        console.error(error);
      })  ;
  
}

}
