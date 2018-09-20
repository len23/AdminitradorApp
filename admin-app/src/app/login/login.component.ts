import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //URL para la api de login http://ec2-34-194-228-205.compute-1.amazonaws.com:3000/api/Users/login
 /*  Ejemplo para loguearse{
    "email":"giovanny@taotechideas.com",
    "password":"1234"
  } */

  constructor(private loginService: LoginService) { }
  ngOnInit() {
  }

  mensaje:string;
  model:User={
    email:'giovanny@taotechideas.com',
    password: '1234'
  };  

  
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log('email: ',this.model.email);
    console.log('password: ',this.model.password);
    this.logearse(this.model);
  }

  
  
  logearse(usuario:User): void {
   
    this.loginService.logUser(usuario)
      .subscribe(usuario => {
        console.log(usuario);
      });
  }
 

}
