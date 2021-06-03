import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  //Criando a function de ir para SignUp page.
  GoPageSignup(){

    this.navCtrl.push(SignupPage);
  
    }

    

}
